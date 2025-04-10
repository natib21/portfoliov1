import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";

import { usePrefersReducedMotion } from "@/hooks";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return; // Skip the animation if reduced motion is preferred
    }
    setFadeIn(true); // Trigger fade-in animation when the component is mounted
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Express js",
    "Next js",
    "Tailwind CSS",
    "SCSS",
    "Styled Components",
    "Mongo DB",
    "PostgreSQL",
    "GO",
    "Nest js",
  ];

  return (
    <StyledAboutSection id="about" style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 1s ease' }}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Nathnael Zelalem and I enjoy creating things
              that live on the internet. Based in Addis Ababa, Ethiopia, I am
              currently a Senior Front-End Engineer at KisPay.
            </p>
            <p>
              I specialize in React and TypeScript, contributing to the creation
              and maintenance of UI components that power the MUI frontend,
              ensuring our platform meets web accessibility standards and best
              practices to deliver an inclusive user experience.
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at{" "}
              <a href="https://kispay.et/">KisPay</a>.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src="/static/image/at-me.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Picture of Mine"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
