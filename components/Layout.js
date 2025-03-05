"use client";
import styled from "styled-components";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

import Loader from "./Loader";
import Nav from "./Nav";
import Social from "./Social";
import Email from "./Email";
import Footer from "./footer";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));

    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (pathname.includes("#")) {
      const id = pathname.split("#")[1]; // Get the hash from the URL
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        el.focus();
      }
    }
    handleExternalLinks();
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <StyledContent>
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />
          <div id="content">
            {children}
            <Footer />
          </div>
        </StyledContent>
     )}  
    </>
  );
}
