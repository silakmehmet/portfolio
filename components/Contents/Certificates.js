'use client';
import React, { useState } from 'react';
import CertificateDetail from './CertificateDetail';

function Certificates({ certificates }) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (index === open) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-36 md:mt-32 md:mx-25 p-10  h-80 py-64 sm:py-16'>
      <div className='px-10 max-w-6xl'>
        {certificates.map((data, index) => {
          return (
            <CertificateDetail
              key={data.id}
              open={index === open}
              title={data.title}
              description={data.description}
              url={data.url}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Certificates;
