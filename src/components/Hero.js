import React from "react";
import ProjectButton from "./shared/ProjectsButton";

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
                  <ProjectButton
                    className='c-btn c-btn--primary c-hero__btn js-btn'
                    content='Projects'
                  />
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
