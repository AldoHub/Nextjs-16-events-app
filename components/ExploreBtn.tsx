'use client';
import { MouseEvent, useState } from 'react';
import Image from 'next/image';

const ExploreBtn = () => {
  //const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log(e, 'clicked');
  };

  return (
    <div className="flex flex-row gap-2 items-center align-center mt-10 mx-auto">
        <a href='#events' id='explore-btn' className='flex flex-row align-center justify-center mx-auto' onClick={(e) => handleClick(e)}>
            <Image src="/icons/arrow-down.svg" width={24} height={24} alt="Explore Events"  className="mr-2" />
            Explore Events
        </a>
    </div>
  );
};  

export default ExploreBtn;