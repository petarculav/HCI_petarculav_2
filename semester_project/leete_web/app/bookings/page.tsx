'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { createClient } from 'contentful-management';
import styles from "./BookingPage.module.css";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    budget: '',
    inquiry: '',
  });

  useEffect(() => {
    const fetchBookedDates = async () => {
      const client = createClient({
        accessToken: 'CFPAT-lUTTXpzg5o8XrPpC2ESsOQIs1GyVLIWq-EF9DsStKzc',
      });

      try {
        const space = await client.getSpace('92a7ocufh4rt');
        const environment = await space.getEnvironment('master');
        const entries = await environment.getEntries({
          content_type: 'booking',
          'fields.date[exists]': true,
        });

        const dates = entries.items.map((entry) => new Date(entry.fields.date['en-US']));
        setBookedDates(dates);
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    };

    fetchBookedDates();
  }, []);

  const onChange = (value: any) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  const isDateBooked = (date: Date) => {
    return bookedDates.some((bookedDate) => bookedDate.toDateString() === date.toDateString());
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createBookingInContentful = async () => {
    const client = createClient({
      accessToken: 'CFPAT-lUTTXpzg5o8XrPpC2ESsOQIs1GyVLIWq-EF9DsStKzc',
    });

    try {
      const space = await client.getSpace('92a7ocufh4rt');
      const environment = await space.getEnvironment('master');

      const entry = await environment.createEntry('booking', {
        fields: {
          name: {
            'en-US': formData.name,
          },
          surname: {
            'en-US': formData.surname,
          },
          email: {
            'en-US': formData.email,
          },
          budget: {
            'en-US': formData.budget ? parseFloat(formData.budget) : 0,
          },
          inquiry: {
            'en-US': formData.inquiry,
          },
          date: {
            'en-US': selectedDate ? selectedDate.toISOString() : '',
          },
        },
      });

      const publishedEntry = await entry.publish();
      console.log('Booking created successfully:', publishedEntry);

      // Update bookedDates state
      setBookedDates((prevDates) => [...prevDates, selectedDate!]);

      // Reset form data after successful submission
      setFormData({
        name: '',
        surname: '',
        email: '',
        budget: '',
        inquiry: '',
      });
      setSelectedDate(null); // Optionally reset the date as well

    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && !isDateBooked(selectedDate)) {
      createBookingInContentful();
    } else {
      alert('This date is already booked or not selected. Please select another date.');
    }
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = date.toDateString() === today.toDateString();
    const isBooked = isDateBooked(date);
    const isPast = date < today;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6; // 0 is Sunday, 6 is Saturday
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

    let classes = [styles.tile]; // Start with the general tile class

    if (view === 'month') {
      if (isToday) {
        classes.push(styles.todayTile);
      } else if (isBooked) {
        classes.push(styles.bookedTile);
      } else if (isPast) {
        classes.push(styles.pastTile);
      } else if (isWeekend) {
        classes.push(styles.weekendTile);
      }
      if (isSelected) {
        classes.push(styles.selectedTile); // Apply the selected tile class only to the selected date
      }
    }

    return classes.join(' ');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex justify-center mb-4">
                    <span className="text-4xl text-white font-merienda p-2 pt-8">Book</span>
                    <img src="/Leete_orange.png" alt="Current Path Image" className="h-24 w-24 pl-4" />
                </h1>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="flex-shrink-0 lg:w-1/2">
          <Calendar
            onChange={onChange}
            value={selectedDate}
            tileClassName={tileClassName}
            tileDisabled={({ date }) => isDateBooked(date)}
            className={styles.calendar}
          />
          <p className="mt-4 mb-4">
            <span className="text-orange font-bold">Selected Date: </span> {selectedDate ? selectedDate.toDateString() : 'None'}
            {selectedDate && isDateBooked(selectedDate) && (
              <span className="text-red-500"> - Unavailable</span>
            )}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-bold text-orange">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="surname" className="font-bold text-orange">Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleFormChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-bold text-orange">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="budget" className="font-bold text-orange">Budget:</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleFormChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="inquiry" className="font-bold text-orange">Additional Inquiry:</label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleFormChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit" className="bg-orange text-white p-2 rounded hover:bg-black hover:text-orange font-bold">
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
