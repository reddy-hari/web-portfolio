import React, { useState } from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";
import "./marquee.css";

interface MarqueeProps {
  iconNames: SemanticICONS[];
}

const Marquee: React.FC<MarqueeProps> = ({ iconNames }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`marquee-container ${isHovered ? "paused" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marquee-content">
        {iconNames.map((iconName, index) => (
          <React.Fragment key={index}>
            <Icon name={iconName} size="big" />
            <span className="separator">{"\u00A0"}</span>
            {/* <Icon
              as="img"
              src="/home/hari/work/projects/blog-app/blog/src/assets/svg/java.svg" // Update the path based on your project structure
              size="big"
              style={{ width: "2em", height: "2em" }} // Adjust the size as needed
            /> */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
