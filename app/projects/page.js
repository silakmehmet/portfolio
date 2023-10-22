import Projects from "@/components/Contents/Projects";
import getData from "@/components/helpers/get-data";
import React from "react";

async function ProjectsPage() {
  const projects = await getData("en", "projects");

  return (
    <div className="container mx-auto py-16 px-8">
      <Projects data={projects} />
    </div>
  );
}

export default ProjectsPage;
