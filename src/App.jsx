import {useState} from 'react'
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[{
      title:'react',
      description:'learning react',
      dueDate:'2025-09-10',
      id: 0.21332332
    }],
  })

  function handleStartAddProject(){
    setProjectState(prev=>{
      return {
        ...prev, 
        selectedProjectId: null,
      }
    })
  }
  
  function handleAddProject(projectData){
    setProjectState((prev)=>{
      const  projectId = Math.random();
      const newProjectData = {
        ...projectData,
        id: projectId,
      }
      return{
        ...prev,
        selectedProjectId: null,
        projects: [...prev.projects, newProjectData]
      }
    })
  }
  function handleCancelAddProject(){
    setProjectState((prev)=>{
      return{
        ...prev,
        selectedProjectId: undefined,
      }
    })
  }
  console.log(projectState)
  
  let content;

  if(projectState.selectedProjectId===null){
    content= <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProjectId===undefined){
    content= <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }  

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectSidebar projects={projectState.projects} onStartAddProject={handleStartAddProject}/>
     {content}
    </main>
  );
}

export default App;
