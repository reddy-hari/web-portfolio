import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const VerticalNav = () => {
  return (
    <Menu pointing secondary vertical>
      <Menu.Item>
        <Link to="/">
          <Menu.Item name="Home">Home</Menu.Item>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/resume">
          <Menu.Item name="Resume">Resume</Menu.Item>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/about">
          <Menu.Item name="About">About</Menu.Item>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default VerticalNav;
