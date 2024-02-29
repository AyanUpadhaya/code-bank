"use client";

import { WindowSize } from "@/TYPES";
import { useEffect, useState } from "react";

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    function handleResize() {
      changeWindowSize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
