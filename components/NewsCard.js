import React from "react";

const NewsCard = ({ title, thumbnail, description }) => {
  return (
    <div className='flex flex-col md:flex-row items-center text-center md:text-left p-4 gap-8 '>
      <div className='image'>
        <img src={thumbnail} alt='' className='rounded ' />
      </div>
      <div className='px-4 '>
        <h2 className='text-xl md:text-2xl'>{title}</h2>
        <p className='text-lg py-2'>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
