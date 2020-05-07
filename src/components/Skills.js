import React from "react";

const Skills = () => {
  return (
    <section>
      <div className='c-skills'>
        <div className='o-container'>
          <div className='o-grid o-grid--center o-grid--cards o-grid--equal-height'>
            <div className='o-grid__col u-3/12@md'>
              <div className='c-skills__box c-skills__box--default'>
                <img
                  className='c-skills__img'
                  src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/icons/components.png'
                  alt='Component'
                />
                <p className='c-skills__title'>Components</p>
                <p className='c-skills__copy'>
                  Reusable, modular and maintainable code.
                </p>
              </div>
            </div>
            <div className='o-grid__col u-3/12@md'>
              <div className='c-skills__box c-skills__box--default'>
                <img
                  className='c-skills__img'
                  src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/icons/responsive.png'
                  alt='Responsive Web Development'
                />
                <p className='c-skills__title'>Responsive</p>
                <p className='c-skills__copy'>
                  Looks great on mobile, tablet and desktop devices.
                </p>
              </div>
            </div>
            <div className='o-grid__col u-3/12@md'>
              <div className='c-skills__box c-skills__box--default'>
                <img
                  className='c-skills__img'
                  src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/icons/web-dev.png'
                  alt='Web Dev'
                />
                <p className='c-skills__title'>Functional</p>
                <p className='c-skills__copy'>
                  Use of vanilla Javascript or Javascript frameworks.
                </p>
              </div>
            </div>
            <div className='o-grid__col u-3/12@md'>
              <div className='c-skills__box c-skills__box--default'>
                <img
                  className='c-skills__img'
                  src='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/icons/accessibility.png'
                  alt='Accessibility'
                />
                <p className='c-skills__title'>Accessible</p>
                <p className='c-skills__copy'>
                  Easy to use for people of all abilities and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
