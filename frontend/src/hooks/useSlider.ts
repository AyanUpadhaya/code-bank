import { useEffect, useRef, useState } from "react";

const useSlider = (totalSlides: number, slideName = "slide", SWIPE_THRESHOLD = 10) => {
  const [count, setCount] = useState<number>(0);
  const [startX, setStartX] = useState<number | null>(null);
  const initialRender = useRef<boolean>(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (count === totalSlides) setCount(0);
    if (count < 0) setCount(totalSlides - 1);

    const slideElement = document.querySelector(`.${slideName}-${count > totalSlides ? 1 : count}`);
    slideElement?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [count, totalSlides, slideName]);

  const handleScrollLeft = () => {
    setCount((count) => count - 1);
  };

  const handleScrollRight = () => {
    setCount((count) => count + 1);
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    setStartX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (startX !== null) {
      const deltaX = event.clientX - startX;

      if (deltaX > SWIPE_THRESHOLD) {
        handleScrollLeft();
        setStartX(null);
      } else if (deltaX < -SWIPE_THRESHOLD) {
        handleScrollRight();
        setStartX(null);
      }
    }
  };

  const handlePointerUp = () => {
    setStartX(null);
  };

  return {
    count,
    handleScrollLeft,
    handleScrollRight,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
};

export default useSlider;
