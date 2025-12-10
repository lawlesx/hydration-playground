"use client";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

const Slider = () => {
  const [position, setPosition] = useState(250);
  const [isDragging, setIsDragging] = useState(false);

  // Refs
  const ref = useRef<HTMLDivElement>(null);
  const coffeeRef = useRef<HTMLDivElement>(null);
  const milkRef = useRef<HTMLDivElement>(null);
  const coffeeContainerRef = useRef<HTMLDivElement>(null);
  const milkContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isDragging && ref.current) {
      const slider = ref.current;
      const newPosition = e.clientX - slider.getBoundingClientRect().left;
      const maxPosition = slider.offsetWidth;

      if (newPosition >= 0 && newPosition <= maxPosition) {
        setPosition(newPosition);
      }
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const isInCenterRange = () => {
      if (coffeeRef.current && milkRef.current) {
        const coffeeWidth = coffeeRef.current.offsetWidth;
        const milkWidth = milkRef.current.offsetWidth;

        return position > coffeeWidth + 10 && position + 10 < 400 - milkWidth;
      }

      return true;
    };

    if (
      coffeeRef.current &&
      milkRef.current &&
      coffeeContainerRef.current &&
      milkContainerRef.current &&
      cursorRef.current
    ) {
      const coffeeContainer = coffeeContainerRef.current;
      const milkContainer = milkContainerRef.current;

      const coffee = coffeeRef.current;
      const milk = milkRef.current;

      const cursor = cursorRef.current;

      if (!isInCenterRange()) {
        coffeeContainer.style.height = "20px";

        coffee.style.bottom = "25px";

        milkContainer.style.height = "20px";

        milk.style.bottom = "25px";

        cursor.style.height = "20px";
        cursor.style.bottom = "0px";
      } else {
        coffeeContainer.style.height = "40px";

        coffee.style.bottom = "0px";

        milkContainer.style.height = "40px";

        milk.style.bottom = "0px";

        cursor.style.height = "32px";
        cursor.style.bottom = "4px";
      }
    }
  }, [position]);

  return (
    <div
      id="slider"
      ref={ref}
      className="tran relative h-10 w-[400px] rounded-md"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
    >
      {/* --------------------------------- Cursor --------------------------------- */}
      <div
        className="absolute bottom-1 h-8 w-1.5 cursor-col-resize rounded-full bg-ivory-cream transition-[height] duration-700"
        style={{
          left: position,
        }}
        ref={cursorRef}
      />
      <div
        className="absolute bottom-0 h-10 rounded-lg bg-mauve-mist transition-[height] duration-700"
        style={{
          width: position ? position - 5 : 0,
        }}
        ref={coffeeContainerRef}
      >
        <div
          ref={coffeeRef}
          className="absolute bottom-0 left-0 flex h-10 select-none items-center gap-1 px-4 transition-all duration-700"
        >
          <h1 className="font-festive font-bold text-dusty-rose text-xl">
            Coffee
          </h1>
          <h2 className="font-storyscript font-bold text-ivory-cream text-shadow-xs text-shadow-dusty-rose text-lg">
            {((position / 400) * 100).toFixed(0)}%
          </h2>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 h-10 rounded-lg bg-dusty-rose transition-[height] duration-700"
        style={{
          width: position ? 388 - position : 0,
        }}
        ref={milkContainerRef}
      >
        <div
          ref={milkRef}
          className="absolute bottom-0 right-0 flex h-10 select-none items-center gap-1 px-4 transition-all duration-700"
        >
          <h2 className="font-storyscript font-bold text-ivory-cream text-shadow-lg text-shadow-mauve-mist text-lg">
            {(((400 - position) / 400) * 100).toFixed(0)}%
          </h2>
          <h1 className="font-festive font-bold text-mauve-mist text-xl">
            Milk
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
