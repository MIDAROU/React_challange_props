function Projects ({ projects }){

    return (
        <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key = {project.id} className="project-card">
              <img src={project.src} alt="project" />
              <h3>{project.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex
                natus quis beatae perspiciatis repellat laudantium aliquam.
              </p>
              <p>
                <a href="#">Github Link</a>
              </p>
            </div>
          ))}
        </div>
    </section> 
    )
}
export default Projects;