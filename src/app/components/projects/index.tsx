import { projectsData } from "../../../../data";
import ProjectItem from "./project-item";

export default function Projects(){
  return (
    <div className="flex flex-col">
      <span>Projetos</span>
      {
        projectsData.map(item => (
          <ProjectItem data={item} key={item.id}/>
        ))
      }
    </div>
  )
}
