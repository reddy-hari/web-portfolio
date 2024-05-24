import { Header } from "semantic-ui-react";
import React from "react";
import { color } from "../../constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CVHeader: React.FC = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);

  return (
    <>
      <Header
        as="h1"
        style={{
          fontFamily: "Old English Text MT, Times New Roman, serif",
          userSelect: "none",
          color: darkTheme.dark ? color.white : color.charcoal,
        }}
      >
        Curriculum Vitae
      </Header>
    </>
  );
};

export default CVHeader;
