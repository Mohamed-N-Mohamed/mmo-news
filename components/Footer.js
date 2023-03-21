import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className='p-8 bg-black text-center text-white'>
      <p className='text-xl'>
        Copy right of MMO News &copy; {date.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
