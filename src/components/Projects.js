import React from "react";
import Zoom from "react-reveal/Zoom";

const currentProjects = [
  {
    image:
      "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/toyota.jpg",
    project: "Toyota Forklift",
    company: "ADK Group",
    url: "https://www.toyotaforklift.com/",
    tech: "Private",
  },
  {
    image:
      "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/cloudtask.jpg",
    project: "CloudTask",
    company: "CloudTask",
    url: "https://www.cloudtask.com/",
  },
  {
    image: "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/jha.jpg",
    project: "JHA",
    company: "ADK Group",
    url: "https://www.johnhummel.com/",
  },
  {
    image:
      "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/privafy.jpg",
    project: "Privafy",
    company: "ADK Group",
    url: "https://www.privafy.com/",
  },
  {
    image:
      "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/indecision.png",
    project: "Indecision",
    company: "Andrew Mead",
    url: "https://santiago-correa-dev.github.io/indecision/",
  },
  {
    image:
      "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/pizza.png",
    project: "Pizza Calculator App",
    company: "Santiago Correa",
    url: "https://unruffled-fermi-473b52.netlify.app/",
  },
  {
    image:
      "https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/news_room.png",
    project: "News Room App",
    company: "Santiago Correa",
    url: "https://admiring-lewin-885a59.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section>
      <div className='c-projects' id='projects'>
        <div className='o-container'>
          <div className='c-projects__wrapper'>
            <h1 className='c-projects__title'>Public Work Showcase</h1>
            <p className='c-projects__copy'>
              Here's some projects I've worked on ranging from 2017 to 2020
              which have all been great, fun and always include a learning
              experience.
            </p>
          </div>
          <div className='o-grid o-grid--cards o-grid--equal-height'>
            {currentProjects.map((project) => {
              return (
                <Zoom key={project.name}>
                  <div className='o-grid__col u-4/12@md' key={project.project}>
                    <a
                      className='c-projects__wrapper'
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='c-projects__card'>
                        <img src={project.image} alt={project.project} />
                        <div className='c-projects__content'>
                          <div className='c-projects__copy'>
                            <p className='c-projects__tagline'>
                              {project.company}
                            </p>
                            <p className='c-projects__heading'>
                              {project.project}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
