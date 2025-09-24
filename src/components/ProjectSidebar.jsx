import React from 'react'
import Button from './button'
import ProjectList from './ProjectList'

const ProjectSidebar = ({projects, onStartAddProject}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className='md:text-xl uppercase font-bold mb-8 text-stone-200'>Your Projects</h2>
        <div className=''>
           <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className='mt-8'>
        {
          projects.map((project)=>(
            <li key={project.id}>
              <button className='w-full text-left px-2 py-1 my-1 rounded-sm text-stone-100 hover:bg-stone-700'>
                {project.title}
              </button>
            </li>
          ))
        }
        </ul>
    </aside>
  )
}

export default ProjectSidebar
