import React from 'react';
import Image from 'next/image';

function HomePage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen justify-items-center bg-inherit pt-14'>
      <div className='mt-4 px-4'>
        <Image
          src='/assets/profilepic/propic.jpeg'
          alt='profile picture'
          width='250'
          height='250'
          className=' rounded-full max-h-screen max-w-min object-cover'
        />
      </div>
      <div className='mt-10 items-center'>
        <div>
          <h1 className='font-sans font-bold text-xl text-center pb-4'>
            About Me
          </h1>
          <p className='text-justify pr-4 font-sans overscroll-auto'>
            Hello, I'm Mehmet, a proactive and solution-oriented individual with
            a passion for continuous improvement and creating exceptional user
            experiences. My journey began even before university, when I
            immersed myself in the restaurant business, honing my management
            skills and developing a knack for empathetic leadership. During my
            time in the restaurant industry, I learned the art of managing
            diverse teams, fostering collaboration, and delivering exceptional
            service. This experience not only sharpened my business acumen but
            also instilled in me a strong sense of empathy and self-critique,
            qualities that have become cornerstones of my professional approach.
            My unwavering dedication to personal growth prompted me to explore
            new horizons, leading me to the dynamic realm of Front-End
            Development. As a quick learner, I relish every opportunity to
            enhance my skillset and embrace challenges that push me to innovate
            and create. Crafting engaging and user-friendly web experiences has
            become a true passion, allowing me to blend my creativity with my
            commitment to problem-solving. In parallel with my journey in
            Front-End Development, I have spent the last 2.5 years excelling as
            a Dangerous Goods Safety Advisor. This role has further deepened my
            capacity to assess complex situations, think critically, and ensure
            compliance with stringent safety standards. It's a testament to my
            versatility and adaptability. I believe that true growth comes from
            embracing change and constantly pushing beyond one's comfort zone.
            Whether it's refining a user interface or ensuring regulatory
            compliance, I'm driven by a desire to innovate and contribute
            meaningfully.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
