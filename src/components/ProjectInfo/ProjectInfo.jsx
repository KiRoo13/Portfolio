import "./ProjectInfo.css";

function ProjectInfo({ project }) {
  return (
    <>
      <h2 className="project-title">{project.title}</h2>
      <div className="project-info">
        <img className="img-info" src={project.img} alt="#" />
        <div className="discription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
          iure eos. Molestiae enim tempora dicta quaerat culpa repudiandae
          blanditiis eligendi.
        </div>
        <div className="skils">Lorem ipsum dolor sit amet.</div>
        <div>
          <ul>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
