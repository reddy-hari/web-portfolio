import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Item, List, Menu } from "semantic-ui-react";
import { RootState } from "../../store/store";
import { color } from "../../constants/constants";

const NotFound = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);
  return (
    <Item.Content
      style={{
        padding: "2em",
        color: darkTheme.dark ? color.white : color.charcoal,
        backgroundColor: darkTheme.dark ? color.gray : color.white,
        minHeight: "100vh",
      }}
    >
      <List horizontal>
        <List.Item>Not Found</List.Item>
        <List.Item>|</List.Item>
        <List.Item>
          <Link to="/">
            <Menu.Item
              name="Back to Home Page"
              active={true}
              style={{
                color: darkTheme.dark ? color.brightblue : color.lightblue,
              }}
            ></Menu.Item>
          </Link>
        </List.Item>
      </List>
    </Item.Content>
  );
};

export default NotFound;
