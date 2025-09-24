import React from "react";
import img from "../assets/no-projects.png";
import Button from "./button";

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={img}
        alt="an empty task"
      />

      <h2 className="text-xl font-bold text-stone-600 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>

      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
