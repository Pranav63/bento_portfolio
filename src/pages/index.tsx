// src/pages/index.tsx
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ProfileLoader from '../components/ProfileLoader';
import BentoGrid from '../components/BentoGrid';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the profile image
    const img = new Image();
    img.src = '/images/pranav_pho.png';
    
    img.onload = () => {
      // Add a minimum loading time of 1 second for the animation
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pranav Arora - Data Scientist & AI Engineer</title>
        <meta name="description" content="Portfolio of Pranav Arora - Data Scientist, AI Engineer, and Technology enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isLoading ? (
          <ProfileLoader />
        ) : (
          <div className="min-h-screen py-8 px-4">
            <BentoGrid />
          </div>
        )}
      </main>
    </>
  );
}