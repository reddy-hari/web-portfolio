import { Header, Item, List } from "semantic-ui-react";
import { workSummary } from "../../assets/workExperience";
import { color } from "../../constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface SummaryProps {
  isSmallScreen: boolean;
}

const Summary: React.FC<SummaryProps> = ({ isSmallScreen }) => {
  const darkTheme = useSelector((state: RootState) => state.theme);

  return (
    <>
      <Item.Group>
        <Header
          style={{
            marginRight: "0.5em",
            color: darkTheme.dark ? color.white : color.charcoal,
          }}
        >
          Summary
        </Header>
        <Item style={{ textAlign: isSmallScreen ? "left" : "justify" }}>
          <List bulleted>
            {workSummary.map((ws) => {
              return <List.Item key={ws}>{ws}</List.Item>;
            })}
          </List>
        </Item>
      </Item.Group>
    </>
  );
};

export default Summary;
