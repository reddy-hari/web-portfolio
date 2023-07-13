import React from "react";
import Bio from "../../common/Bio";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { color, size } from "../../constants/constants";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";

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
          borderTop: darkTheme.dark
            ? `0.1px solid ${color.charcoal}`
            : `0.1px solid ${color.gray}`,
          backgroundColor: darkTheme.dark
            ? "rgba(24, 26, 27, 1)"
            : "rgba(255, 255, 255, 1)",
          padding: ".25em 0",
        }}
      >
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          style={{
            color: darkTheme.dark ? color.charcoal : color.gray,
            fontWeight: "bold",
            transition: "color 0.5s",
          }}
          onMouseEnter={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = darkTheme.dark
              ? color.lightgray
              : color.accentyellow;
          }}
          onMouseLeave={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = darkTheme.dark
              ? color.charcoal
              : color.charcoal;
          }}
        >
          <Icon name="home" size={size.small as IconSizeProp} link></Icon>
        </Menu.Item>
      </div>
    </div>
  );
};

export default Folio;
