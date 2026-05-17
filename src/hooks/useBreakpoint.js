import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [bp, setBp] = useState({
    mobile: false,
    tablet: false,
    desktop: true,
    width: 1200,
  });

  useEffect(() => {
    const fn = () => {
      const w = window.innerWidth;

      setBp({
        mobile: w < 640,
        tablet: w >= 640 && w < 1024,
        desktop: w >= 1024,
        width: w,
      });
    };

    fn();

    window.addEventListener("resize", fn);

    return () => window.removeEventListener("resize", fn);
  }, []);

  return bp;
}

