import { useParams } from "react-router-dom";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import { projectsList } from "../../helpers/projectsList";
import "./Project.css";


function Project() {
  const { id } = useParams();
  const [ project ]  = projectsList.filter((project) => project.id === Number(id))


  return (
    <section className="section">
      <div className="conteiner">
        <div className="project-content">
            <ProjectInfo project={project}/>
        </div>
      </div>
    </section>
  );
}

export default Project;
