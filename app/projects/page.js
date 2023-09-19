import Projects from '@/components/Contents/Projects';
import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      header: 'What is Next.Js ?',
      description: 'The React Framework for Production',
      image: '/assets/profilepic/propic.jpeg',
    },
    {
      id: 2,
      header: 'What is Tailwindcss ?',
      description:
        'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
      image: '/assets/profilepic/propic.jpeg',
    },
    {
      id: 3,
      header: 'What is art ?',
      description:
        ' a visual object or experience consciously created through an expression of skill or imagination.',
      image: '/assets/profilepic/propic.jpeg',
    },
  ];
  return (
    <div className='container mx-auto py-36 px-8'>
      <Projects data={projects} />
    </div>
  );
}

export default ProjectsPage;
