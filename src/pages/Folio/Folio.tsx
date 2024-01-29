import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import Bio from "../../common/Bio";
import { color, size } from "../../constants/constants";
import { RootState } from "../../store/store";

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
          padding: ".25em 0",
        }}
      >
        <Menu.Item
          as={Link}
          to="/resume"
          name="Resume"
          style={{
            color: darkTheme.dark ? color.charcoal : color.gray,
            fontWeight: "bold",
            transition: "color 0.5s",
          }}
          onMouseEnter={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = darkTheme.dark ? color.lightgray : color.black;
          }}
          onMouseLeave={(
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = darkTheme.dark ? color.charcoal : color.gray;
          }}
        >
          Resume
          {/* <Icon name="home" size={size.small as IconSizeProp} link></Icon> */}
        </Menu.Item>
      </div>
    </div>
  );
};

export default Folio;
