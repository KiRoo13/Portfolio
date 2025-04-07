import "./ProjectInfo.css";

function ProjectInfo({ project }) {
  return (
    <>
      <h2 className="project-title">{project.title}</h2>
      <div className="project-info">
        <img className="img-info" src={project.img} alt={project.title} />
        <div className="discription">{project.description}</div>
        <div className="features">
          <ul className="features-list">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="skils">
          {project.technologies.map((item) => (
            <div className="technologies" key={item}>{item}</div>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubLink}>Сылка на Git</a>
          <a href={project.liveDemoLink}>Сылка на Demo</a>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
