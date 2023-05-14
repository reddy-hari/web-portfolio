import React from "react";
import Bio from "../../common/Bio";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Folio = () => {
  return (
    <div>
      <div style={{ paddingTop: "5em" }}>
        <Bio />
      </div>
      <div
        id="footer-home-link"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          borderTop: "1px solid #ccc",
          padding: ".5em 0",
        }}
      >
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          style={{ color: "gray", fontWeight: "bold" }}
          onMouseEnter={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = "#4383B0";
          }}
          onMouseLeave={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = "gray";
          }}
        >
          Home
        </Menu.Item>
      </div>
    </div>
  );
};

export default Folio;
