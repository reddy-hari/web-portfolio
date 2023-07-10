import React from "react";
import Bio from "../../common/Bio";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { color } from "../../constants/constants";

const Folio = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);
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
          borderTop: "0.1px solid #ccc",
          backgroundColor: darkTheme.dark
            ? "rgba(24, 26, 27, 1)"
            : "rgba(255, 255, 255, 1)",
          padding: ".5em 0",
        }}
      >
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          style={{
            color: darkTheme.dark ? color.white : color.gray,
            fontWeight: "bold",
            transition: "color 1s",
          }}
          onMouseEnter={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = darkTheme.dark
              ? color.neongreen
              : color.charcoal;
          }}
          onMouseLeave={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = darkTheme.dark ? color.white : color.gray;
          }}
        >
          Home
        </Menu.Item>
      </div>
    </div>
  );
};

export default Folio;
