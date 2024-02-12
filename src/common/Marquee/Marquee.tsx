import React, { useState, useRef, MouseEvent, useEffect } from "react";
import "./marquee.css";

interface MarqueeProps {
  iconNames: Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >;
}

const Marquee: React.FC<MarqueeProps> = ({ iconNames }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const marqueeRef = useRef<HTMLDivElement>(null);
  // const [contentWidth, setContentWidth] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // if (marqueeRef.current) {
    //   // Calculate the width of the marquee content
    //   setContentWidth(marqueeRef.current.scrollWidth);
    // }
  }, []);

  // const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
  //   setIsDragging(true);
  //   setStartX(e.pageX - marqueeRef.current!.offsetLeft);
  //   setScrollLeft(marqueeRef.current!.scrollLeft);
  // };

  // const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  //   if (!isDragging) return;
  //   const x = e.pageX - marqueeRef.current!.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   marqueeRef.current!.scrollLeft = scrollLeft - walk;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  return (
    <div
      className={`marquee-container ${isHovered ? "paused" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // ref={marqueeRef}
    >
      <div
        className="marquee-content"
        style={{ userSelect: "none",
        // width: `${contentWidth * 2}`
      }}
        // ref={marqueeRef}
      >
        {Object.values(iconNames).map((IconComponent, index) => (
          <React.Fragment key={index}>
            <IconComponent style={{ width: "1.5em", height: "1.5em" }} />
            <span className="separator">{"\u00A0"}</span>
          </React.Fragment>
        ))}

      </div>
    </div>
  );
};

export default Marquee;
