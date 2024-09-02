{/*import type { Metadata } from 'next'
import { Roboto, Roboto_Condensed, Playfair_Display } from 'next/font/google'
import clsx from 'clsx'
import Navbar from ".Navbar";
import Footer from ".Footer";
import './globals.css'
import Link from "next/link"

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: 'LEETE',
}

const pages = {
  home: "/",
  showcase: "/showcase",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en">
      <body className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}>
        {/* <nav className="flex justify-center p-14">
        <ul className="flex gap-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/components/showcase?_page=1&_limit=10">Work showcase</Link></li>
          <li><Link href="/components/about">About</Link></li>
          <li><Link href="/components/bookings">Bookings</Link></li>
          <li><Link href="/components/signup">Sign Up</Link></li>
        </ul>
      </nav>{children} 

        <Navbar />
        {children}
        <Footer />
     
      </body>
    </html>
  )
}
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Playfair_Display } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "Lab project | %s",
    default: "Lab project",
  },
  description: "Next.js lab project",
};

// Get this info from some external source (e.g. CMS)
const pages = {
  home: "/",
  showcase: "/showcase",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import {
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import clsx from "clsx";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "Lab project | %s",
    default: "LEETE",
  },
  description: "DJ LEETE's web",
};

// Get this info from some external source (e.g. CMS)
const pages = {
  home: "/",
  bookings: "/bookings",
  mixes: "/showcase",
  about: "/about",
  contact: "/contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
      >
        <nav className="flex items-center justify-center p-4">
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
*/}

// app/layout.tsx (or your specific layout file)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from  "./navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEETE",
  description: "DJ LEETE's web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation /> {/* Render the navigation component */}
        <main className="pt-16"> {/* Adjust this padding as necessary */}
        {children}
      </main>
      </body>
    </html>
  );
}
