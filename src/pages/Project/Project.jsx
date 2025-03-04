import { useParams } from "react-router-dom";
import "./Project.css";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import { useProjects } from "../../context/projectsContext";

function Project() {
  const { id } = useParams();
  const projects = useProjects();

  return (
    <section className="section">
      <div className="conteiner">
        <div className="project-content">
            <ProjectInfo project={projects[id]}/>
        </div>
      </div>
    </section>
  );
}

export default Project;
