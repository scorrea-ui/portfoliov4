import React from "react";
import ProjectButton from "./shared/ProjectsButton";
import Fade from "react-reveal/Fade";

const Hero = (props) => {
  return (
    <section>
      <div className={props.className}>
        <div className='o-container'>
          <div className='o-grid'>
            <div className='o-grid__col u-7/12@md'>
              {props.title ? (
                <Fade left delay={500}>
                  <h1 className='c-hero__title'>{props.title}</h1>
                </Fade>
              ) : null}
              {props.copy ? (
                <Fade left delay={1000}>
                  <p className='c-hero__copy'> {props.copy} </p>
                </Fade>
              ) : null}
              {props.buttons ? (
                <Fade left delay={1500}>
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
                </Fade>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
