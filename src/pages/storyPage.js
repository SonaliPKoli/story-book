import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Image, Button } from "react-bootstrap";
import {  Container, Nav, Navbar } from "react-bootstrap";

const StoryPage = ({ data }) => {
  const { story_title } = useParams();

  // Find the story with the matching title from the data array
  if(!data){
    return null;
  }
  const selectedStory = data.find((story) => story.story_title === story_title);

  if (!selectedStory) {
    return <div>Story not found!</div>; // Handle the case when the story is not found
  }

  const { story,card_image } = selectedStory;

  return (
    <>
       <Navbar bg="primary" expand="md" variant="dark">
       <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <h1 style={{ color: "white", fontSize: "20px" }}>Story Time</h1>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
              <Link to={`/api/stories/category/${encodeURIComponent("fairy tales")}`} className="nav-link">
                  <h1 style={{ color: "white", fontSize: "20px" }}>
                    Fairy Tales
                  </h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
              <Link to={`/api/stories/category/${encodeURIComponent("animal stories")}`} className="nav-link">

                  <h1 style={{ color: "white", fontSize: "20px" }}>
                    Animal Stories
                  </h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
              <Link to={`/api/stories/category/${encodeURIComponent("moral stories")}`} className="nav-link">

                  <h1 style={{ color: "white", fontSize: "20px" }}>
                    Moral Stories
                  </h1>
                </Link>
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="m-5">
        <Row className="p-5">
          <h1> {story_title}</h1>
          <Image src={card_image} height={600} width={100} ></Image>
        </Row>
        <Row className="p-5">
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "30px",
              color: "GrayText",
            }}
          >
            {story}
          </p>
        </Row>
        <Row className="p-5">
          <Button size="lg" as={Link} to="/">
            Back to Stories
          </Button>
        </Row>
      </div>
    </>
  );
};

export default StoryPage;
