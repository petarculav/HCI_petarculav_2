'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';


export interface MixParams {
  params: Params;
}

interface Params {
  id: string;
}

interface MixFields {
  title: string;
  sound: string;
  description: string;
  genre: string;
  duration: string;
  tracklist: string[];
  cover?: any;
}

interface Mix {
  sys: {
    id: string;
  };
  fields: MixFields;
}

const contentful = require('contentful');

const client = contentful.createClient({
  space: '92a7ocufh4rt',
  accessToken: 'WkB7zJBynyC21k7HMK6ils9FLq8K3TZQxJVAvG4WqLY',
});

export default function Showcase({ params }: MixParams) {
  const [entries, setEntries] = useState<Mix[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await client.getEntries({
          content_type: 'mix',
        })) as { items: Mix[] }; 

        setEntries(response.items);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchData();
  }, []);

  // Filter entries based on the search query
  const filteredEntries = entries.filter(mix =>
    mix.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center">
                    <span className="text-4xl text-white font-merienda p-2 pt-8">Mixes of</span>
                    <img src="/Leete_orange.png" alt="Current Path Image" className="h-24 w-24 pl-4" />
                </h1>
      
      {/* Search Bar */}
      <div className="mb-16 mt-4">
      <i className="fas fa-search text-2xl text-orange mr-2"></i>
        <input
          type="text"
          placeholder="Search mixes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-fit p-2 rounded-xl bg-orange text-white"
        />
      </div>
      
      <ul className="ml-16 mr-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-4">
        {filteredEntries.map(mix => (
          <li key={mix.sys.id} className="bg-black p-8 rounded-lg rounded-xl flex flex-col items-center animate-pulse" style={{
            borderRight: '2px solid #F97316 ',  // Adjust as needed
            borderTop: '2px solid #F97316', // Adjust as needed
          }}>
            <Link href={`/showcase/${mix.sys.id}`}>
              <img
                src={mix.fields.cover.fields.file.url}
                alt={mix.fields.title}
                className="w-full h-full max-h-[30vh] rounded-lg mb-4"
              />
              <h2 className="text-2xl font-merienda text-orange text-center mt-8">{mix.fields.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
