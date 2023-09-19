'use client';
import React, { useState } from 'react';
import Certificates from '@/components/Contents/Certificates';

const CertificatesPage = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (index === open) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordion = [
    {
      id: 1,
      question: 'What is Next.Js ?',
      answer: 'The React Framework for Production',
    },
    {
      id: 2,
      question: 'What is Tailwindcss ?',
      answer:
        'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    },
    {
      id: 3,
      question: 'What is art ?',
      answer:
        ' a visual object or experience consciously created through an expression of skill or imagination.',
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center md:mt-16 md:mx-25 p-10 rounded-xl h-80 py-30'>
      <div className='px-[40px] max-w-[800px]'>
        {accordion.map((data, index) => {
          return (
            <Certificates
              key={data.id}
              open={index === open}
              title={data.question}
              description={data.answer}
              toggle={() => toggle(index)}
            />
          );
        })}{' '}
      </div>
    </div>
  );
};
export default CertificatesPage;
