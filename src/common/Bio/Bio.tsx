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
  const folioDescriptions = ["Engineer", "Philosopher", "Artist"];

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
            {folioDescriptions.map((fd, i) => {
              return (
                <>
                  <Menu.Item
                    onMouseEnter={(
                      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.fontWeight = "bold";
                    }}
                    onMouseLeave={(
                      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.fontWeight = "normal";
                    }}
                  >
                    {fd}
                  </Menu.Item>
                  {i !== folioDescriptions.length - 1 ? (
                    <Menu.Item>•</Menu.Item>
                  ) : null}
                </>
              );
            })}
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
