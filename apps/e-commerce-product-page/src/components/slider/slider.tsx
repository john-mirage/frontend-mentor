import { ReactNode } from "react";
import * as Styled from "./slider.style";
import { AnimatePresence } from "framer-motion";

interface SliderProps {
  className?: string;
  images: {
    src: string;
    alt: string;
  }[];
  currentImage: number;
  children: ReactNode;
}

function Slider({ className, images, currentImage, children }: SliderProps) {
  return (
    <>
      <AnimatePresence initial={false}>
        <Styled.Image
          className={className}
          key={currentImage}
          src={images[currentImage - 1].src}
          alt={images[currentImage - 1].alt}
          initial={{ opacity: 0.5 }}
          animate={{ zIndex: 11, opacity: 1 }}
          exit={{ zIndex: 10, opacity: 0.5 }}
          transition={{ type: "spring", duration: 0.5 }}
        />
      </AnimatePresence>
      {children}
    </>
  );
}

export default Slider;
