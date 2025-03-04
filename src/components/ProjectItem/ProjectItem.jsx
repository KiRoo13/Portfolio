import { NavLink } from "react-router-dom";
import './ProjectItem.css'


function ProjectItem({ project }) {

  return (
    <NavLink to={`/projects/${project.id}`}>
      <div className="project-item">
        <div className="project-item__header">
          <img src={project.img} alt="#" />
        </div>
        <div className="project-item__footer">
          <p>{project.title}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectItem;
