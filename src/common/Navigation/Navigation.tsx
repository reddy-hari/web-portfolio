import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Menu, SemanticCOLORS } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import { color, size } from "../../constants/constants";
import { toggleDarkTheme } from "../../reducers/theme/themeSlice";
import { RootState } from "../../store/store";

const Navigation = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleDarkTheme());
  };

  return (
    <>
      <Menu
        text
        style={{ margin: "0em", padding: "1em" }}
        inverted={darkTheme.dark}
      >
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

        <Menu.Menu position="right">
          <Menu.Item name="Theme" onClick={handleTheme}>
            {darkTheme.dark ? (
              <Icon
                name="moon outline"
                size={size.small as IconSizeProp}
                color={color.white as SemanticCOLORS}
                link
              />
            ) : (
              <Icon
                name="adjust"
                size={size.small as IconSizeProp}
                color={color.black as SemanticCOLORS}
                link
              />
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navigation;
