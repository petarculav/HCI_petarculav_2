import React from 'react';

function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen w-screen"
      style={{ backgroundImage: 'url(/4-1@2x.jpg)' }}
    >
      <div className="p-8 md:py-16 md:mx-16 lg:mx-24 flex-col justify-center ">
          <img src="/Leete_orange.png" alt="Current Path Image" className="h-[50vh] w-[60vh] p-8 md:mx-8 animate-pulse mt-16" />
        <p className=" text-lg md:text-xl lg:text-2xl text-black bg-cover bg-center w-fit p-2 md:p-8 font-merienda font-bold"
      style={{ backgroundImage: 'url(/paint.jpg)' }}>
          Welcome to the home of DJ based in Split, Croatia
        </p>
      </div>
    </main>
  );
}

export default Home;
