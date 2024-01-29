import React from "react";
import Navigation from "../../common/Navigation";
import {
  Grid,
  Item,
  List,
  Card,
  Feed,
  Icon,
  SemanticICONS,
} from "semantic-ui-react";
import { degrees, certificates } from "../../assets/education";
import { workSummary, workExperience } from "../../assets/workExperience";
import { color } from "../../constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Resume = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);

  return (
    <div>
      <Navigation />
      <section
        style={{
          padding: "1em",
          color: darkTheme.dark ? color.white : color.charcoal,
        }}
      >
        <Grid padded relaxed="very">
          <Grid.Row columns={1} centered>
            <Item.Group>
              <h1>Curriculum Vitae</h1>
            </Item.Group>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Item.Group relaxed="very">
                <h3>Summary</h3>
                <hr></hr>
                <Item>
                  <List bulleted>
                    {workSummary.map((ws) => {
                      return <List.Item key={ws}>{ws}</List.Item>;
                    })}
                  </List>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={12}>
              <h3>Experience</h3>
              <hr></hr>
              <Item.Group divided relaxed="very">
                {workExperience.map((ex, index) => {
                  return (
                    <Item key={ex.company + index}>
                      <Item.Image size="tiny" src={ex.logo} />
                      <Item.Content>
                        <Item.Meta
                          style={{
                            color: darkTheme.dark
                              ? color.white
                              : color.charcoal,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.5em",
                              color: darkTheme.dark
                                ? color.white
                                : color.charcoal,
                            }}
                          >
                            {ex.company}
                          </span>
                          <span style={{ fontSize: ".9em" }}>{ex.title}</span>
                        </Item.Meta>
                        <Item.Meta
                          style={{
                            color: darkTheme.dark
                              ? color.white
                              : color.charcoal,
                            fontSize: ".8em",
                            paddingTop: ".5em",
                            paddingBottom: ".25em",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>
                            <Icon name={"checked calendar" as SemanticICONS} />
                            {ex.end
                              ? ` ${ex.start.toLocaleString("en-US", {
                                  month: "long",
                                  year: "numeric",
                                })} - ${ex.end.toLocaleString("en-US", {
                                  month: "long",
                                  year: "numeric",
                                })}`
                              : ` Since ${ex.start.toLocaleString("en-US", {
                                  month: "long",
                                  year: "numeric",
                                })}`}
                          </span>
                          <span style={{ flex: 1, textAlign: "right" }}>
                            <span
                              style={{
                                color: darkTheme.dark
                                  ? color.white
                                  : color.charcoal,
                              }}
                            >
                              <span>{ex.jobType}</span>
                              {ex.payroll ? (
                                <span style={{ fontSize: ".79em" }}>
                                  {`| via ${ex.payroll}`}
                                </span>
                              ) : null}
                            </span>
                          </span>
                        </Item.Meta>
                        <Item.Description>
                          <List bulleted>
                            {ex.roles.map((role) => (
                              <List.Item
                                key={role}
                                style={{
                                  color: darkTheme.dark
                                    ? color.white
                                    : color.charcoal,
                                }}
                              >
                                {role}
                              </List.Item>
                            ))}
                          </List>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  );
                })}
              </Item.Group>
            </Grid.Column>

            <Grid.Column width={4}>
              <Card
                style={{
                  background: darkTheme.dark ? color.gray : color.white,
                }}
              >
                <Card.Content>
                  <Card.Header
                    style={{
                      color: darkTheme.dark ? color.white : color.charcoal,
                    }}
                  >
                    Education
                  </Card.Header>
                  <Feed size="small">
                    {degrees.map((degree) => (
                      <Item.Group key={degree.graduated}>
                        <Feed.Event>
                          <Feed.Content>
                            <List vertical="true" size="small">
                              <List.Item>
                                <Feed.Label>
                                  {degree.course} | {degree.major}
                                </Feed.Label>
                              </List.Item>
                              <List.Item>
                                <Feed.Label>{degree.university}</Feed.Label>
                              </List.Item>
                              <List.Item>
                                <Feed.Label>
                                  <Icon
                                    name={"checked calendar" as SemanticICONS}
                                  />
                                  {degree.graduated}
                                </Feed.Label>
                              </List.Item>
                            </List>
                          </Feed.Content>
                        </Feed.Event>
                      </Item.Group>
                    ))}
                  </Feed>
                </Card.Content>
              </Card>
              <Card
                style={{
                  background: darkTheme.dark ? color.gray : color.white,
                }}
              >
                <Card.Content>
                  <Card.Header
                    style={{
                      color: darkTheme.dark ? color.white : color.charcoal,
                    }}
                  >
                    Certifications
                  </Card.Header>
                  <Feed size="small">
                    {certificates.map((certificate) => (
                      <Item.Group key={certificate.credential}>
                        <Feed.Event>
                          <Feed.Content>
                            <List vertical="true" size="small">
                              <List.Item>
                                <a
                                  href={certificate.link}
                                  style={{ textDecoration: "none" }}
                                >
                                  {certificate.title}
                                </a>
                              </List.Item>
                              <List.Item>
                                <Feed.Label>
                                  {certificate.offeredBy} |{" "}
                                  {certificate.platform}
                                </Feed.Label>
                              </List.Item>
                              <List.Item>
                                <Feed.Label>
                                  Credential | {certificate.credential}
                                </Feed.Label>
                              </List.Item>
                            </List>
                          </Feed.Content>
                        </Feed.Event>
                      </Item.Group>
                    ))}
                  </Feed>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    </div>
  );
};

export default Resume;
