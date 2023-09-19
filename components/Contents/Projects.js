import React from 'react';
import Image from 'next/image';

function Projects(props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {props.data.map((project) => (
        <div className='shadow-lg rounded-lg'>
          <Image
            src={project.image}
            alt='project-image'
            width={200}
            height={200}
            className='rounded-lg'
          />
          <div className='p-5'>
            <h3 className='text-2xl font-bold text-slate-700 mb-3'>
              {project.header}
            </h3>
            <p className='text-lg font-normal text-justify'>
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
