'use client' // Indicate this is a client component

import Link from "next/link";
import { usePathname } from 'next/navigation'; // Use client-side hook here
import React from "react";

const pages = {
  bookings: "/bookings",
  mixes: "/showcase",
  LEETE: "/",
  about: "/about",
  contact: "/contact",
  //signup: "/signup"
};

export default function Navigation() {
  const pathname = usePathname(); // Get the current pathname
  

  return (
    <nav className="fixed top-0 left-0 p-8 w-screen z-50 bg-black">
      <ul className="flex gap-4 font-merienda md:text-2xl md:gap-16 items-center justify-center">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link
              href={path}
              className={path === pathname ? "text-orange" : ""}
            >
              {path === '/' ? (
                pathname === '/' ? (
                  <img src="/Leete_orange.png" alt="Current Path Image" className="h-12 w-12" /> // Image when current pathname is '/'
                ) : (
                  <img src="/Leete_white.png" alt={name} className="h-12 w-12" /> // Image for the '/' link
                )
              ) : (
                name
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
