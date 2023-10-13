import Link from 'next/link';
import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const CertificateDetail = ({ open, toggle, title, description, url }) => {
  return (
    <div className='pt-3 border-2 my-2 border-black rounded-3xl sm:rounded-full'>
      <div
        className='py-2 px-12 flex justify-between items-center cursor-pointer'
        onClick={toggle}
      >
        <p className='text-base font-semibold'>{title}</p>
        <div className='text-3xl'>
          {open ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='px-12 pb-5'>{description}</div>
        <div className='text-center justify-center mb-4'>
          <Link
            href={url}
            target='blank'
            className='border-2 border-black rounded-full p-2'
          >
            See the certificate
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default CertificateDetail;
