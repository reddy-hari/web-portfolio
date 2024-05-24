import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  Card,
  Feed,
  Grid,
  Icon,
  Item,
  List,
  SemanticICONS
} from "semantic-ui-react";
import { ReactComponent as CertificateIcon } from "../../../src/assets/svg/certificate.svg";
import { certificates, degrees } from "../../assets/education";
import { workExperience } from "../../assets/workExperience";
import Navigation from "../../common/Navigation";
import { color } from "../../constants/constants";
import { RootState } from "../../store/store";
import CVHeader from "./Header";
import Summary from "./Summary";

const Resume = () => {
  const darkTheme = useSelector((state: RootState) => state.theme);
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [isSmallScreen]);

  const educationCardColumn = isSmallScreen ? 16 : 4;
  const experienceCardColumn = isSmallScreen ? 16 : 12;

  return (
    <div style={{ width: "100%" }}>
      <Navigation />
      <section
        key={key}
        style={{
          padding: "1em",
          color: darkTheme.dark ? color.white : color.charcoal,
          width: "100%",
        }}
      >
        <Grid padded relaxed="very" stackable>
          <Grid.Row columns={1} centered>
            <Item.Group>
              <CVHeader />
            </Item.Group>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Summary isSmallScreen={isSmallScreen} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={experienceCardColumn}>
              <h3>Experience</h3>
              <hr></hr>
              <Item.Group divided relaxed="very">
                {workExperience.map((ex, index) => {
                  return (
                    <Item
                      key={ex.company + index}
                      style={{ textAlign: "justify" }}
                    >
                      <Item.Content>
                        <Item.Meta
                          style={{
                            color: darkTheme.dark
                              ? color.white
                              : color.charcoal,
                            // display: "flex",
                            // justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.5em",
                              paddingBottom: "0.5em",
                            }}
                          >
                            {ex.company}
                          </div>
                          <div
                            style={{
                              fontSize: "1em",
                              paddingBottom: "0.5em",
                            }}
                          >
                            {ex.title} {/* | {ex.jobType} */}
                          </div>
                          <div
                            style={{
                              fontSize: ".75em",
                              paddingBottom: "0.5em",
                            }}
                          >
                            <span>
                              <Icon
                                name={"checked calendar" as SemanticICONS}
                              />
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
                          </div>
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
              <hr></hr>
            </Grid.Column>

            <Grid.Column width={educationCardColumn}>
              <Card
                fluid
                style={{
                  background: darkTheme.dark ? color.gray : color.white,
                  width: "100%",
                  boxShadow: isSmallScreen ? "none" : "1px",
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
                                <Feed.Label>{degree.university}</Feed.Label>
                              </List.Item>
                              <List.Item>
                                <Feed.Label
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CertificateIcon
                                    style={{
                                      marginRight: "0.25em",
                                      flexShrink: 0,
                                    }}
                                  />
                                  {degree.course} in {degree.major}
                                </Feed.Label>
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
                fluid
                style={{
                  background: darkTheme.dark ? color.gray : color.white,
                  width: "100%",
                  boxShadow: isSmallScreen ? "none" : "1px",
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
                              <List.Item
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CertificateIcon
                                  style={{
                                    marginRight: "0.25em",
                                    flexShrink: 0,
                                  }}
                                />
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


// below 500px width - relative font reduction or disable viewing
