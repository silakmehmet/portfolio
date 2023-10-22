import React from "react";
import Image from "next/image";
import { MdOutlineWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

function Projects(props) {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
      {props.data.map((project) => (
        <div key={project.id} className="shadow-lg rounded-lg relative">
          <Image
            src={project.image}
            alt="project-image"
            width={200}
            height={200}
            className="rounded-lg w-full px-1 pt-2"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold text-slate-700 mb-3">
              {project.title}
            </h3>
            <p className="my-5 text-justify line-clamp-3 hover:line-clamp-none">
              {project.description}
            </p>
          </div>
          <div className="bottom-0 absolute inset-x-0">
            <div className="flex flex-row mb-3 justify-around">
              <Link
                href={project.demo}
                target="blank"
                className="flex items-center mx-auto justify-around  w-24 rounded-full bg-sky-700 "
              >
                <MdOutlineWeb size={20} />
                <p className="text-sm font-semibold">Live Demo</p>
              </Link>
              <Link
                href={project.code}
                target="blank"
                className="flex items-center mx-auto justify-around w-24 rounded-full bg-sky-700  bottom-0 inset-x-0"
              >
                <FaCode size={20} />
                <p className="text-sm font-semibold">Code</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
