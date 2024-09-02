import React from 'react';

function NotFound() {
  return (
    <main
      className="bg-cover bg-center min-h-screen w-screen"
      style={{ backgroundImage: 'url(/4-1@2x.jpg)' }}
    >
      <div className="md:py-48 md:mx-16 lg:mx-24 ">
          <h1 className="text-orange font-merienda text-9xl pl-16">404</h1>
        <p className="mt-10 text-lg md:text-xl text-black bg-cover bg-center w-fit p-8 font-merienda font-bold"
      style={{ backgroundImage: 'url(/paint.jpg)' }}>
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}

export default NotFound;
