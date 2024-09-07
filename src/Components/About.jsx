/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/image3.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a GSSSIETW student and have interned in data analysis. Furthermore, I have learned and am able to create web applications using HTML, CSS, and the MERN stack.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "MongoDB",
  "MERN Stack",
  "SQL",
  "Data Analysis",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about developing user-friendly and meaningful UIs with HTML, CSS, JavaScript, and the MERN stack, focusing on creating impactful frontend experiences.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#FFE4C4",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          color:"#030821",
        }}
      >
        <h2>About Myself</h2>
        <p className="large" style={{ color: "black" }}>{description}</p>

        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color:"#030821",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", fontSize: "20px", color: "#030821" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
