"use client";
import styled from "styled-components";

import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Jobs from "@/components/sections/jobs";
import Featured from "@/components/sections/Featured";
import Contact from "@/components/sections/Contact";
const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  font-size: 20px;
`;
const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function HomePage() {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}
