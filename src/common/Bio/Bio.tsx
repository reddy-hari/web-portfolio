import { useSelector } from "react-redux";
import { Icon, Menu, SemanticICONS } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import { size, socialMediaLinks } from "../../constants/constants";
import { RootState } from "../../store/store";
import DisplayPhoto from "../DisplayPhoto/DisplayPhoto";

const Bio = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);
  const openLink = (url: string | URL | undefined) => {
    window.open(url);
  };

  return (
    <div>
      <div
        style={{
          display: "block",
          margin: "auto",
          width: "50%",
          opacity: "95%",
        }}
      >
        <DisplayPhoto size="medium"></DisplayPhoto>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
            marginBottom: "1em",
          }}
        >
          <Menu text inverted={darkTheme.dark}>
            <Menu.Item>Engineer</Menu.Item>
            <Menu.Item>•</Menu.Item>
            <Menu.Item>Philosopher</Menu.Item>
            <Menu.Item>•</Menu.Item>
            <Menu.Item>Artist</Menu.Item>
          </Menu>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          {Object.entries(socialMediaLinks).map((sm, i) => {
            let [key, value] = sm;
            return (
              <Icon
                key={key}
                name={key as SemanticICONS}
                size={size.big as IconSizeProp}
                inverted={darkTheme.dark}
                link
                onClick={() => openLink(value)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bio;
