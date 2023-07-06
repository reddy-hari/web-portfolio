import React from "react";
import { Image, SemanticSIZES } from "semantic-ui-react";
import dp from "../../assets/hari.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { color } from "../../constants/constants";

interface IDPProps {
  size: string;
}

export default function DisplayPhoto(props: IDPProps) {
  const darkTheme = useSelector((state: RootState) => state.theme);
  const { size } = props;
  return (
    <Image
      src={dp}
      centered
      size={size as SemanticSIZES}
      circular
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        target.style.boxShadow = darkTheme.dark
          ? `0px 0px 25px ${color.neoncyan}`
          : `0px 0px 25px ${color.neoncyan}`;
        target.style.borderRadius = "50%";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        target.style.boxShadow = darkTheme.dark
          ? `0px 0px 0px ${color.gray}`
          : `0px 0px 0px ${color.white}`;
        target.style.borderRadius = "50%";
      }}
    />
  );
}
