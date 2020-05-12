import React from "react";

const scrollToProject = (event) => {
  const projects = Array.prototype.slice.call(
    document.querySelectorAll(event.target.getAttribute("data-scroll"))
  );

  if (projects) {
    projects.map((project) => {
      project.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  }
};

const ProjectButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={(e) => scrollToProject(e)}
      data-scroll='#projects'
    >
      {props.content}
    </button>
  );
};

export default ProjectButton;
