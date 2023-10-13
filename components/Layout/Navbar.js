'use client';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { TbBrandGmail } from 'react-icons/tb';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  const logo = '<mş/>';
  const links = [
    ['Home', '/'],
    ['Certificates', '/certificates'],
    ['Projects', '/projects'],
    ['Resume', '/resume'],
  ].map(([title, link]) => (
    <Link key={title} href={link}>
      <li className='ml-10 hover:border-b-2 border-cyan-800 text-lg font-medium'>
        {title}
      </li>
    </Link>
  ));
  const mobileLinks = [
    ['Home', '/'],
    ['Certificates', '/certificates'],
    ['Projects', '/projects'],
    ['Resume', '/resume'],
  ].map(([title, link]) => (
    <Link key={title} href={link}>
      <li
        onClick={menuHandler}
        className='py-2 list-none items-center justify-center'
      >
        {title}
      </li>
    </Link>
  ));

  return (
    <nav className='fixed  w-full top-0 shadow-xl z-10 bg-white'>
      <div className='flex justify-between items-center w-full h-full px-4 py-2 2xl:px-16'>
        <Link href='/'>
          <span className='font-extrabold text-3xl'>{logo}</span>
        </Link>
        <div>
          <ul className='hidden sm:flex'>{links}</ul>
        </div>
        {!menuOpen ? (
          <div onClick={menuHandler} className='sm:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={25} />
          </div>
        ) : (
          <div onClick={menuHandler} className='cursor-pointer'>
            <AiOutlineClose size={25} />
          </div>
        )}
      </div>
      <div
        className={
          menuOpen
            ? 'fixed right-0 top-13 w-[65%] h-screen sm:hidden bg-slate-300 p-10 ease-in duration-500'
            : 'fixed left-[100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className='flex w-full items-center justify-center'></div>
        <div className='flex-col  py-4'>
          {mobileLinks}
          <div className='flex pt-8 font-extrabold justify-around'>
            Contact Me
          </div>
          <div className='flex flex-row justify-around pt-4 items-center'>
            <Link
              href='https://www.linkedin.com/in/silakmehmet/'
              target='_blank'
            >
              <AiOutlineLinkedin size={30} className='cursor-pointer' />
            </Link>
            <Link href='https://github.com/silakmehmet' target='_blank'>
              <AiOutlineGithub size={30} className='cursor-pointer' />
            </Link>
            <Link href='mailto:silakmehmet@gmail.com' target='_blank'>
              <TbBrandGmail size={30} className='cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
