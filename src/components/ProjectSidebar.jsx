import React from "react";
import Button from "./button";

const ProjectSidebar = ({ projects, onStartAddProject, onSelectProject, selectedProjectId }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="md:text-xl uppercase font-bold mb-8 text-stone-200">
        Your Projects
      </h2>
      <div className="">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 my-1 rounded-sm text-stone-100 hover:bg-stone-700 ";
          if (project.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200 ";
          } else {
            cssClasses += "text-stone-400 ";
          }
          return (
            <li key={project.id}>
              <button className={cssClasses} onClick={()=>onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
