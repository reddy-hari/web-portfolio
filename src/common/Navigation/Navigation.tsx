import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu>
      <Menu.Menu>
        <Link to="/">
          <Menu.Item name="Home">Home</Menu.Item>
        </Link>
      </Menu.Menu>

      <Menu.Menu>
        <Link to="/resume">
          <Menu.Item name="Resume">Resume</Menu.Item>
        </Link>
      </Menu.Menu>

      <Menu.Menu>
        <Link to="/about">
          <Menu.Item name="About">About</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
