import React from "react";

const scrollToProject = (event) => {
  const projects = document.querySelector(
    event.target.getAttribute("data-scroll")
  );

  projects.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const Hero = (props) => {
  return (
    <section>
      <div className={props.className}>
        <div className='o-container'>
          <div className='o-grid'>
            <div className='o-grid__col u-7/12@md'>
              {props.title ? (
                <h1 className='c-hero__title'>{props.title}</h1>
              ) : null}
              {props.copy ? (
                <p className='c-hero__copy'> {props.copy} </p>
              ) : null}
              {props.buttons ? (
                <div className='c-hero__buttons'>
                  <button
                    className='c-btn c-btn--primary c-hero__btn js-btn'
                    data-scroll='#projects'
                    onClick={(e) => scrollToProject(e)}
                  >
                    Projects
                  </button>
                  <a
                    href='tel:3008753370'
                    className='c-btn c-btn--secondary c-hero__btn'
                  >
                    Contact
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
