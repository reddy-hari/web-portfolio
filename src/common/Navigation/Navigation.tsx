import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

interface NavigationProps {
  tabsPosition?: "regular" | "center";
}

const Navigation = (props: NavigationProps) => {
  return (
    <>
      <Menu text style={{ margin: "0em", padding: "1em" }}>
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
          <Link to="/folio">
            <Menu.Item name="Folio">Folio</Menu.Item>
          </Link>
        </Menu.Menu>

        <Menu.Menu position={!props.tabsPosition ? "right" : "left"}>
          <Link to="#">
            <Menu.Item name="Theme">
              <Button toggle active={true} size="tiny">
                Toggle
              </Button>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navigation;
