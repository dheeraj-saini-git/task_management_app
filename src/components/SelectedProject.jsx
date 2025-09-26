import React from "react";

const SelectedProject = ({project}) => {
  const format = new Date(ProjectSidebar.dueDate).toLocaleDateString('en-US',{
    year:'numeric',
    month:'short',
    day:'numeric'
  })
  return (
    <div className="w-[35rem] mt-15">
      <header>
        <div>
          <h2>{project.title}</h2>
          <button>Delete</button>
        </div>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
      </header>
    </div>
  );
};

export default SelectedProject;
