"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onPrev = () => {
    if (!ref.current) return;

    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
    const totalWidth = ref.current.scrollWidth;

    ref.current.scrollLeft = (newIndex * totalWidth) / images.length;
  };

  const onNext = () => {
    if (!ref.current) return;

    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
    const totalWidth = ref.current.scrollWidth;

    ref.current.scrollLeft = (newIndex * totalWidth) / images.length;
  };

  return (
    <div className="flex items-center justify-start h-[400px] w-150 outline relative">
      <button
        onClick={onPrev}
        className="absolute -left-40 grid place-items-center cursor-pointer transition-all hover:scale-125 group"
      >
        <ArrowLeft
          className="text-ivory-cream z-1 backdrop-blur-xs"
          size={64}
        />
        <ArrowLeft
          className="text-dusty-rose absolute translate-x-0.5 translate-y-0.5 z-0 group-hover:text-golden-amber"
          size={64}
        />
      </button>
      <div
        className="w-full h-full flex items-center justify-start overflow-hidden scroll-smooth"
        ref={ref}
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="image"
            className="h-full object-cover"
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="absolute -right-40 grid place-items-center cursor-pointer transition-all hover:scale-125 group"
      >
        <ArrowRight
          className="text-ivory-cream z-1 backdrop-blur-xs"
          size={64}
        />
        <ArrowRight
          className="text-dusty-rose absolute translate-x-0.5 translate-y-0.5 z-0 group-hover:text-golden-amber"
          size={64}
        />
      </button>
    </div>
  );
};

export default Carousel;
