import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";

class Home extends Component {
  state = {
    classes: "c-hero c-hero--home",
    title: "Santiago Correa",
    copy:
      "A showcase of the websites I've worked on and skills acquired. Ranging from small to big projects.",
    buttons: true,
    titleClass: "c-hero__title c-hero__title--home",
  };

  render() {
    const { classes, title, copy, buttons, titleClass } = this.state;
    return (
      <div>
        <Helmet>
          <title>Santiago Correa | Front End Developer | Portfolio</title>
          <meta
            name='title'
            content='Santiago Correa | Front End Developer | Portfolio'
          />
          <meta
            name='description'
            content="Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important."
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://santiagocorrea.netlify.com'
          />
          <meta property='og:title' content='Santiago Correa | Portfolio' />
          <meta
            property='og:description'
            content="Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important."
          />
          <meta
            property='og:image'
            content='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/portfolio.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://santiagocorrea.netlify.app/'
          />
          <meta
            property='twitter:title'
            content='Santiago Correa | Front End Developer | Portfolio'
          />
          <meta
            property='twitter:description'
            content="Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important."
          />
          <meta
            property='twitter:image'
            content='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/portfolio.png'
          />
        </Helmet>
        <Header />
        <Hero
          className={classes}
          title={title}
          copy={copy}
          buttons={buttons}
          titleClass={titleClass}
        />
        <Skills />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default Home;
