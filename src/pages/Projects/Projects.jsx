import { useState } from "react";
import FilterProject from "../../components/FilterProject/FilterProject";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useProjects } from "../../context/projectsContext";
import "./Projects.css";

function Projects() {
  const projects = useProjects();

  const [selectValue, setSelectValue] = useState("React");

  return (
    <>
      <section className="section projects">
        <div className="conteiner">
          <div className="projects-content">
            <h1 className="projects-title">PROJECTS</h1>
            <FilterProject selectValue={selectValue} setSelectValue={setSelectValue}/>
            <div className="wrapper-projects">
              {projects
                .filter((project) => project.category === selectValue)
                .map((project) => (
                  <ProjectItem
                    key={project.id}
                    project={project}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
