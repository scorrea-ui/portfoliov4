import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../src/components/global/Header";
import Footer from "../src/components/global/Footer";
import Me from "../src/components/Me";

class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Santiago Correa | Front End Developer | About Me</title>
          <meta
            name='title'
            content='Santiago Correa | Front End Developer | About Me'
          />
          <meta
            name='description'
            content='I build and maintain websites, I love being in constant contact with clients/people of interest keeping them updated on progress , milestones, issues that come up and more based on what is happening at the moment'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://santiagocorrea.netlify.com/about'
          />
          <meta property='og:title' content='Santiago Correa | Portfolio' />
          <meta
            property='og:description'
            content='I build and maintain websites, I love being in constant contact with clients/people of interest keeping them updated on progress , milestones, issues that come up and more based on what is happening at the moment'
          />
          <meta
            property='og:image'
            content='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/about.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://santiagocorrea.netlify.app/about'
          />
          <meta
            property='twitter:title'
            content='Santiago Correa | Front End Developer | About Me.'
          />
          <meta
            property='twitter:description'
            content='I build and maintain websites, I love being in constant contact with clients/people of interest keeping them updated on progress , milestones, issues that come up and more based on what is happening at the moment'
          />
          <meta
            property='twitter:image'
            content='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/about.png'
          />
        </Helmet>
        <Header />
        <Me />
        <Footer />
      </div>
    );
  }
}

export default About;
