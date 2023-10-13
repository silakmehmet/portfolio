import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { TbBrandGmail } from 'react-icons/tb';
import Link from 'next/link';

function Footer() {
  return (
    <div className='fixed hidden sm:flex w-full bottom-2 z-40 text-center items-center justify-center'>
      <div className='border-black border-2 grid items-center rounded-3xl mx-auto max-w-[660px] px-5 py-2'>
        <p className='relative font-bold pb-2 '>Contact Me</p>
        <div className='flex gap-20 justify-around items-center'>
          <Link href='https://www.linkedin.com/in/silakmehmet/' target='_blank'>
            <AiOutlineLinkedin
              size={25}
              className='cursor-pointer hover:scale-150'
            />
          </Link>
          <Link href='https://github.com/silakmehmet' target='_blank'>
            <AiOutlineGithub
              size={25}
              className='cursor-pointer hover:scale-150'
            />
          </Link>
          <Link href='mailto:silakmehmet@gmail.com' target='_blank'>
            <TbBrandGmail
              size={25}
              className='cursor-pointer hover:scale-150'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
