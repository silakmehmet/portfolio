import React from 'react';
import Image from 'next/image';

function HomePage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen justify-items-center bg-inherit mt-10 pt-16'>
      <div className='mt-4 px-4 hidden md:block'>
        <Image
          src='/assets/profilepic/propic.jpeg'
          alt='profile picture'
          width='250'
          height='250'
          priority={true}
          className=' rounded-full max-h-screen h-5/6 max-w-screen w-5/6 object-cover'
        />
      </div>
      <div className='my-16 mx-auto px-6'>
        <h1 className='font-sans font-bold text-4xl text-left pb-2'>
          Hi I am Mehmet,
        </h1>
        <h1 className='font-sans font-bold text-6xl text-left pb-2'>
          Front End Developer
        </h1>

        <p className='text-justify py-2 text-lg font-sans overscroll-auto'>
          I am a proactive and solution-oriented individual who embarked on my
          journey before university, gaining valuable experience in the
          restaurant business, primarily as a manager. Throughout my
          professional career, I have cultivated a strong sense of empathy and
          self-criticism, translating these qualities into practical habits
          across all aspects of life.
        </p>
        <p className='text-justify py-2 text-lg font-sans overscroll-auto'>
          Driven by a passion for continuous improvement, I am a quick learner,
          constantly seeking opportunities to enhance my skillset. My dedication
          to personal growth has led me to the exciting world of Front-End
          Development, where I thrive in crafting engaging and user-friendly web
          experiences.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
