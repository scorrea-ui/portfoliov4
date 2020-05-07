import React from "react";

const Me = () => {
  return (
    <section>
      <div className='c-skills'>
        <div className='o-container'>
          <h1 className='u-mb u-text-center'>A little bit about myself</h1>
          <div className='o-grid o-grid--center o-grid--cards o-grid--equal-height'>
            <div className='o-grid__col u-9/12@md'>
              <div className='c-skills__box c-skills__box--about u-ph'>
                <p className='c-skills__title'>Front End Web Developer Here</p>
                <p className='c-skills__copy u-mb'>
                  What I love doing is creating beautiful, responsive and fast
                  optimized websites using the experience gained. I have also
                  had the opportunity to work a little bit in devops which is
                  pretty cool when using a Custom build solution on bitbucket as
                  well as work with PHP and Node.js a bit.
                </p>
                <p className='c-skills__copy u-mb'>
                  The method and tech stack I use for custom solutions are the
                  following: HTML5, CSS3, SCSS, LESS, Javascript, jQuery, ES6,
                  PHP, Wordpress, React, Webpack, Docker, Bitbucket Pipelines,
                  Agile, Jira, Confluence, Rest API Handling, IOTA, Bulma,
                  Bootstrap, 3rd party integrations, and BEM.
                </p>
                <p className='c-skills__copy u-mb'>
                  I build and maintain websites, I love being in constant
                  contact with clients/people of interest keeping them updated
                  on progress , milestones, issues that come up and more based
                  on what is happening at the moment, I also love to adapt to
                  tools that are being used to ensure everyone feels comfortable
                  and confident.
                </p>
                <p className='c-skills__copy'>
                  I also consider that it is important to love what you do, and
                  when you do, you just do great, so as Nike says "JUST DO IT"
                  I've worked with individuals, small companies, medium
                  companies and fortune 500 companies such as Toyota
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
