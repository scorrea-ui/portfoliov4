import React, { Component } from "react";
import Glide from "@glidejs/glide";

class Testimonials extends Component {
  state = {
    slider: new Glide(".glide", {
      type: "slider",
      startAt: 0,
      perView: 1,
      autoheight: true,
    }),
  };

  componentDidMount() {
    this.state.slider.mount();
  }

  componentWillUnmount() {
    this.state.slider.destroy();
  }

  render() {
    return (
      <section>
        <div className='o-container'>
          <h1 className='u-mb u-text-center'>Public Testimonials</h1>
          <div className='c-quote c-quote---white'>
            <div className='glide'>
              <div className='glide__track' data-glide-el='track'>
                <div className='glide__slides'>
                  <div className='glide__slide'>
                    <div className='c-quote__box'>
                      <blockquote>
                        <p>
                          "As a Project Manager, I have the pleasure of working
                          with Santiago on a variety of WordPress website
                          development projects, and I am always impressed with
                          his professionalism, self-driven attitude, and the
                          teamwork spirit which he brings to every project. His
                          ability to pick up new processes and technical skills
                          quickly, to ask questions, his motivation to learn as
                          much as he can, and his determination to succeed as a
                          developer are quite impressive, particularly to me."
                        </p>
                        <p>
                          "As a Project Manager, I have learned so much from him
                          about development and industry best practices, and am
                          so grateful for the extra time he takes to answer all
                          my questions and to support me during a project. His
                          attention to detail and the due diligence and care he
                          puts into his work, have made him stand out in our
                          organization, and I can't wait to watch him grow even
                          more. I have no doubt the sky is the limit for
                          Santiago.""
                        </p>
                        <div className='c-quote__author'>
                          <p>- Fiana Eber</p>
                          <p>
                            <strong>ADK Group | Project Manager</strong>
                          </p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className='glide__slide'>
                    <div className='c-quote__box'>
                      <blockquote>
                        <p>
                          "For some time I've served as a facilitator and mentor
                          for Santiago and I can definitely ensure that it is
                          rare to come across standout talent like him. He has
                          definitely shown to be a relentless problem solver and
                          a passionate learner, working himself through his
                          career by constantly seeking improvement. Never
                          selfish with his knowledge, he is always open helping
                          others in many creative ways. I'm pretty sure that any
                          team or organization would be benefited from having
                          him on board given his outstanding technical
                          capabilities and his passion to create."
                        </p>
                        <div className='c-quote__author'>
                          <p>- Manuel Stroh</p>
                          <p>
                            <strong>Globant | Full Stack Web Developer</strong>
                          </p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className='glide__slide'>
                    <div className='c-quote__box'>
                      <blockquote>
                        <p>
                          "Santiago helped me create 2 great websites in the
                          space of 4 weeks. He is super responsive and
                          attentive, and also worked extremely well with my
                          graphic designer and pushed her to get ready what we
                          needed to finish the projects on time. Highly
                          recommend him as a web developer"
                        </p>
                        <p>- Michael Hanson</p>
                      </blockquote>
                    </div>
                  </div>
                  <div className='glide__slide'>
                    <div className='c-quote__box'>
                      <blockquote>
                        <p>
                          "Santiago is a great web developer. He works quickly
                          and produces quality work. I'd be happy to recommend
                          him to anyone."
                        </p>
                        <div className='c-quote__author'>
                          <p>- Tom Jenkins</p>
                          <p>
                            <strong>Cloudtask | VP Marketing</strong>
                          </p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className='glide__arrows' data-glide-el='controls'>
                <button
                  className='glide__arrow glide__arrow--left'
                  data-glide-dir='<'
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icons/caret-square-left-regular.svg`}
                    alt='Prev'
                  />
                </button>
                <button
                  className='glide__arrow glide__arrow--right'
                  data-glide-dir='>'
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icons/caret-square-right-regular.svg`}
                    alt='Next'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
