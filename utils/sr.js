/* 
import ScrollReveal from "scrollreveal";

const isSSR = typeof window === "undefined";
const sr = isSSR ? null : ScrollReveal();

export default sr;
 */

/* import { useEffect, useState } from "react";

const useScrollReveal = () => {
  const [sr, setSr] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default;
        setSr(ScrollReveal()); // Initialize ScrollReveal properly
      });
    }
  }, []);

  return sr;
};

export default useScrollReveal;
 */

import ScrollReveal from "scrollreveal";

const sr = typeof window !== "undefined" ? ScrollReveal() : null;

export default sr;
