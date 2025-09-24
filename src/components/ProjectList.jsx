import React from 'react'

const ProjectList = ({data}) => {
    console.log(typeof(data))
  return (
    data && <ul className='text-stone-300 mt-8 text-xl'>
        {
            data.map((item)=>(
                item.projects.map(project=>(
                    <li key={project.id}>
                        {project.title}
                    </li>
                ))
            ))
        }
    </ul>
  )
}

export default ProjectList
