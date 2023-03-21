import React from "react";

const Header = () => {
  return (
    <div className='header-background  h-screen flex justify-center items-center relative'>
      <div className='overlay absolute top-0 right-0 left-0 bg-black/70 h-full' />
      <div className='header-text text-white z-10 p-4 text-center'>
        <h1 className='text-xl md:text-3xl pb-2'>Welcome to MMO News</h1>
        <p className='px-4 md:px-12 md:text-xl'>
          Here you can access the best MMO games, multiplayer online games and
          news
        </p>
      </div>
    </div>
  );
};

export default Header;
