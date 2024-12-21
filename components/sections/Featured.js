import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import sr from "@/utils/sr";
import { srConfig } from "@/config";
import { Icon } from "../icon";
import { usePrefersReducedMotion } from "@/hooks";
import Image from "next/image";

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const Featured = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>
      <StyledProjectsGrid></StyledProjectsGrid>
    </section>
  );
};

export default Featured;
