import React from "react";

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
          <div className='o-grid o-grid--cards'>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://www.toyotaforklift.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/toyota.jpg'
                    alt='Toyota Forkift'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>Toyota Forklift</p>
                      <p>
                        Built with <strong>ADK</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://cloudtask.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/cloudtask.jpg'
                    alt='Cloudtask'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>Cloudtask</p>
                      <p>
                        Built with <strong>Cloudtask</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://www.johnhummel.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/jha.jpg'
                    alt='John Hummel'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>JHA</p>
                      <p>
                        Built with <strong>ADK</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://www.privafy.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/privafy.jpg'
                    alt='Privafy'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>Privafy</p>
                      <p>
                        Built with <strong>ADK</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://santiago-correa-dev.github.io/indecision/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/indecision.png'
                    alt='indecision'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>indecision</p>
                      <p>
                        Built with <strong>indecision</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://santiago-correa-dev.github.io/frogger/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/frogger.png'
                    alt='Frogger'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>Frogger</p>
                      <p>
                        Built with <strong>Udacity</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://unruffled-fermi-473b52.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/pizza.png'
                    alt='Pizza Calculator'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>Pizza Calculator</p>
                      <p>
                        Built with <strong>Acamica</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='o-grid__col u-4/12@md'>
              <a
                href='https://admiring-lewin-885a59.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='c-projects__card'>
                  <img
                    src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/news_room.png'
                    alt='News Room'
                  />
                  <div className='c-projects__overlay'>
                    <div className='c-projects__copy'>
                      <p>News Room</p>
                      <p>
                        Built with <strong>Acamica</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
