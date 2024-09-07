/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image4.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Zero Hunger Data Analysis",
    description:
      "Utilized data analytics tools to identify trends and propose data-driven solutions.Created comprehensive reports and dashboards to present findings to stakeholders.",
    url: "https://drive.google.com/file/d/1FYP3p5aV5yIZB-uCv7tFPrcodMp9csh0/view?usp=drive_link",
  },
  {
    title: "HTML-Resume",
    description:
      "A responsive resume built entirely with HTML, showcasing my web development skills.",
    url: "https://shubhangi3376.github.io/capstone-1-example/ ",
  },
  {
    title: "Responsive Resume",
    description:
      "Created a visually appealing and interactive resume that adapts to different screen sizes and devices, showcasing my skills and experience.",
    url: "https://shubhangi3376.github.io/html-portfolio/ ",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Passionate about building innovative solutions and exploring insights. Let's connect!",
    url: "https://github.com/Shubhangi3376",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "	#29333d" }}>
      <h2 style={{ textAlign: "center" }} className="text-light">Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ backgroundColor: "#fff" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-light">
                <h3 style={{ flexBasis: "40px" }} className="text-light">{project.title}</h3>
              </a>
              <p className="small text-light">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;