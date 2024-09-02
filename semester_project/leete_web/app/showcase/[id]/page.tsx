'use client';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import NotFound from '@/app/not-found';


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

export default function MixList({ params }: MixParams) {
  const [entry, setEntry] = useState<Mix | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contentful = require('contentful');
        const client = contentful.createClient({
          space: '92a7ocufh4rt',
          accessToken: 'WkB7zJBynyC21k7HMK6ils9FLq8K3TZQxJVAvG4WqLY',
        });

        const response = await client.getEntries({
          content_type: 'mix',
          'sys.id': params.id.toString(),
          include: 3, 
        }) as { items: Mix[] };

        if (response.items.length > 0) {
          setEntry(response.items[0]);
        } else {
          console.warn(`Mix with ID ${params.id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching entry:', error);
      }
    };

    fetchData();
  }, [params.id]);

  console.log('Current entry state:', entry);

  if (!entry) {
    return (
      <NotFound/>
    );
  }

  return (
    <main className="flex flex-col space-y-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="flex justify-center items-center">
  <div className="w-2/3 h-100 rounded-xl bg-orange mx-auto flex flex-col justify-center items-center px-8 py-4">
    {entry?.fields.cover?.fields?.file?.url ? (
      <img
        className="w-full h-full object-cover rounded-xl max-h-[50vh] min-h-[50vh] mt-2"
        src={entry.fields.cover.fields.file.url}
        alt={entry.fields.title}
      />
    ) : (
      <span className="flex justify-center items-center w-full h-full">No Image</span>
    )}
    <h1 className="flex items-baseline justify-center ">
                    <p className="text-5xl font-bold font-merienda text-white p-2 text-center mt-4">{entry?.fields.title || 'No Title'}</p>
                </h1>
                <div className="flex justify-center mt-2"><span className="font-bold text-xl text-white mt-4 ">by</span>
                <img src="/Leete_white.png" alt="Current Path Image" className="h-12 w-12 inline-block ml-2" /> </div>
  </div>
</div>

<div className="flex flex-col justify-center items-center space-y-4 mt-8 mr-16 ml-16">
            <div className= "flex justify-between w-full">
            <div className="text-white p-1">
              <Link href = {entry?.fields.sound}><i className="fas fa-volume-up mr-2 text-2xl text-orange animate-pulse"></i><span className="text-xl">Listen here</span></Link>
            </div>
            <div className="text-white text-normal bg-orange rounded-xl p-1 pl-4 pr-4 font-bold">
              {entry?.fields.genre || 'No Genre'}
            </div>
            </div>
        <div className="flex flex-col p-4 space-y-6 pt-8">
          <p className="text-lg text-white">
            {entry?.fields.description || 'No Description'}
          </p>
          </div>
          <div className="shadow-md rounded-3xl p-6 h-full">
  <p className="text-3xl text-orange font-bold font-merienda text-center mb-4">
    Track List
  </p>
  <ol className="grid grid-cols-2 gap-y-2 gap-x-2">
    {entry?.fields.tracklist?.map((track, index) => (
      <li className="flex space-x-4" key={index}>
        <span className="text-orange text-2xl font-merienda">
          0{index + 1}
        </span>
        <span className="text-normal pt-2">{track}</span>
      </li>
    ))}
  </ol>
</div>

        </div>
      </div>

      
      
    </main>
  );
}
