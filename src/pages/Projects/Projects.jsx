import FilterProject from "../../components/FilterProject/FilterProject";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useProjects } from "../../context/projectsContext";
import './Projects.css'

function Projects() {
  const projects = useProjects()

  return (
    <>
      <section className="section projects">
        <div className="conteiner">
          <div className="projects-content">
            <h1 className="projects-title">PROJECTS</h1>
            <FilterProject/>
            <div className="wrapper-projects">
              {projects.map((project, index) => (
                <ProjectItem key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
