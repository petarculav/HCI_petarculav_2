'use client'
import React, { useState, useEffect } from 'react';
import './About.css';
import Arrow from '../arrow';
 // Import the Arrow component

export default function About() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setIsAtBottom(scrollPosition >= documentHeight - 10); // Adjust tolerance as needed
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center bg-black min-h-screen">
      {/* First Section */}
      <section className="bg-black flex flex-col-reverse lg:flex-row items-center w-full shadow-lg rounded-lg">
        <div className="relative w-full lg:w-1/2 h-auto mb-4 lg:mb-0 rounded-xl">
          <img 
            src="/2-1@3x.jpg" 
            alt="LEETE" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="bg-black w-full lg:w-1/2 p-4 rounded-xl">
          <h2 className="text-orange font-merienda text-5xl pt-8 text-center flex items-center justify-center">
            <span>Where It <br />All Began</span>
          </h2>
          <p className="text-white mb-4 text-small p-16 leading-loose">
            The story of <img src="/Leete_orange.png" alt="Current Path Image" className="h-10 w-10 inline-block pb-1" /> traces back to the sunlit streets of Split, Croatia, a city known for its vibrant culture and rich musical heritage. Growing up in this picturesque coastal town, <img src="/Leete_orange.png" alt="Current Path Image" className="h-10 w-10 inline-block pb-1" /> was surrounded by a diverse range of musical influences. The rhythmic pulse of the Adriatic coast and the lively atmosphere of local festivals provided a unique backdrop for his early musical experiences. This environment, brimming with traditional Croatian folk tunes and the eclectic beats of modern electronic music, sparked his initial fascination with the art of sound.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-black flex flex-col lg:flex-row items-center w-full shadow-lg rounded-lg">
        <div className="bg-black w-full lg:w-1/2 p-4 rounded-xl">
          <h2 className="text-orange font-merienda text-5xl pt-8 text-center">DJ&apos;s Life</h2>
          <p className="text-white mb-4 text-small p-16 leading-loose">
            As <img src="/Leete_orange.png" alt="Current Path Image" className="h-10 w-10 inline-block pb-1" /> grew as an artist, his journey through the vibrant world of DJing became increasingly dynamic. His relentless pursuit of musical excellence led him to delve into a wide array of electronic sub-genres. From deep house to techno, <img src="/Leete_orange.png" alt="Current Path Image" className="h-10 w-10 inline-block pb-1" /> crafted a sound that was both innovative and deeply personal. Each performance allowed him to showcase his unique flair, blending intricate beats with atmospheric melodies to create an immersive sonic experience.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 h-auto mb-4 lg:mb-0 rounded-xl">
          <img 
            src="/305-58.jpg" 
            alt="LEETE" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-black flex flex-col-reverse lg:flex-row items-center w-full p-4 shadow-lg rounded-lg">
        <div className="relative w-full lg:w-1/2 h-auto mb-4 md:mb-0 rounded-xl">
          <img 
            src="/305-2.jpg" 
            alt="LEETE" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="bg-black w-full lg:w-1/2 rounded-xl">
          <h2 className="text-orange font-merienda text-5xl pt-8 text-center">Music Culture</h2>
          <p className="text-white mb-4 text-small p-16 leading-loose">
            The influence of <img src="/Leete_orange.png" alt="Current Path Image" className="h-10 w-10 inline-block pb-1" /> extends far beyond his individual performances, reflecting a broader evolution within global music culture. His innovative approach to electronic music has contributed to a richer and more diverse soundscape. By pushing the boundaries of the genre, <img src="/Leete_orange.png" alt="Current Path Image" className="h-10 w-10 inline-block pb-1" /> has inspired both aspiring DJs and established artists, highlighting the universal language of music and its power to connect people across different cultures.
          </p>
        </div>
      </section>

      {/* Arrow Component */}
      <Arrow isAtBottom={isAtBottom} onClick={scrollToTop} />
    </main>
  );
}
