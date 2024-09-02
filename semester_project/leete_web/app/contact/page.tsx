'use client'
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const imageList = [
    '/305-42.jpg',
    '/4-1@2x.jpg',
    '/305-56.jpg',
    '/305-58.jpg',
    '/4-1@2x.jpg',
];

export default function Contact() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <main className="flex flex-col items-center bg-black min-h-screen">
            <section className="bg-black w-full mb-8 mt-8 text-center">
                <h1 className="flex justify-center">
                    <span className="text-4xl text-white font-merienda p-2 pt-8">Contact</span>
                    <img src="/Leete_orange.png" alt="Current Path Image" className="h-24 w-24 pl-4" />
                </h1>
            </section>
            <section className="bg-black flex flex-col md:flex-row items-center w-full max-w-7xl p-4 shadow-lg rounded-lg">
                <div className="relative w-full md:w-1/2 h-auto md:h-[450px] mb-4 md:mb-0">
                    <img 
                        src={imageList[currentImageIndex]} 
                        alt="LEETE" 
                        style={{
                            borderLeft: '2px solid #F97316',  // Adjust as needed
                            borderBottom: '2px solid #F97316', // Adjust as needed
                        }}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div className="bg-black w-full md:w-1/2 p-4 rounded-xl" style={{
                            borderRight: '2px solid #F97316 ',  // Adjust as needed
                            borderTop: '2px solid #F97316', // Adjust as needed
                        }}>
                    <ul className="text-lg list-none p-8 pt-16 flex flex-col items-center">
                        <li className="mb-8 flex items-center">
                            <i className="fas fa-envelope text-3xl mr-6"></i>
                            <a href="mailto:petar.leete@gmail.com" className="text-orange hover:underline">petar.leete@gmail.com</a>
                        </li>
                        <li className="mb-8 flex items-center">
                            <i className="fab fa-instagram text-3xl mr-4"></i>
                            <a href="https://www.instagram.com/djleete" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">LEETEs Instagram Profile</a>
                        </li>
                        <li className="mb-8 flex items-center">
                            <i className="fab fa-facebook text-3xl mr-4"></i>
                            <a href="https://www.facebook.com/petar.culav.7" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">LEETEs Facebook Profile</a>
                        </li>
                        <li className="mb-8 flex items-center">
                            <i className="fab fa-linkedin text-3xl mr-6"></i>
                            <a href="https://www.linkedin.com/in/petar-ćulav-a986491b7/" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">LEETEs LinkedIn Profile</a>
                        </li>
                        <li className="mb-8 flex items-center">
                            <i className="fab fa-soundcloud text-3xl mr-4"></i>
                            <a href="https://soundcloud.com/petar-ulav" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">LEETEs SoundCloud Profile</a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
