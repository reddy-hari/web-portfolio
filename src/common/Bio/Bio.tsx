import React from "react";
import { Icon, Menu, SemanticCOLORS, SemanticICONS } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import { color, size, socialMediaLinks } from "../../constants/constants";
import DisplayPhoto from "../DisplayPhoto/DisplayPhoto";

/* Alternate temporary fix for the React and Seamtic UI version support differences: */
// import { ComponentType } from "react";
// import { Table as _Table, TableProps } from "semantic-ui-react";
// const Table = _Table as ComponentType<TableProps>

const Bio = () => {
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
          <Menu text>
            <Menu.Item>Engineer</Menu.Item>
            <Menu.Item>Artist</Menu.Item>
            <Menu.Item>Philosopher</Menu.Item>
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
                color={color.black as SemanticCOLORS}
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
