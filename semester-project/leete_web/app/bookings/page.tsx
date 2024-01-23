'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './BookingPage.module.css';

// Import statements

const BookingPage = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    budget: '',
    inquiry: '',
  });

  const onChange = (value: any) => {
    if (value instanceof Date) {
      setDate(value);
    } else if (Array.isArray(value)) {
      setDate(value[0]);
    } else {
      setDate(null);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can access the booking data in the formData object here
    console.log(formData);
    // You can add your logic to send the booking data to your backend or handle it as needed
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Book LEETE</h1>
      <Calendar onChange={onChange} value={date} className={styles.calendar} />
      <p className={styles.selectedDate}>
        Selected Date: {date ? date.toDateString() : 'None'}
      </p>

      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="budget">Budget:</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleFormChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="inquiry">Additional Inquiry:</label>
          <textarea
            id="inquiry"
            name="inquiry"
            value={formData.inquiry}
            onChange={handleFormChange}
          />
        </div>

        <button type="submit">Submit Booking</button>
      </form>

      
    </div>
  );
};

export default BookingPage;

