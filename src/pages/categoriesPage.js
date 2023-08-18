import React from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import StoryCards from "../components/storyCards";
import "../App.css";
const CategoriesPage = ({data}) => {

  const { categories } = useParams();

 if(!data){
  return null;
}
  //Find the story with the matching category from the data array
  const selectedStory = data.filter(
    (story) => story.categories === categories
  );

  
  if (!selectedStory.length) {
    return <div>Story not found!</div>; // Handle the case when the story is not found
  }
  

 

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

      <Container>
        <Row>
          {selectedStory.length > 0 ? (
            selectedStory.map((storyData) => (
              <Col
                key={storyData.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <StoryCards data={storyData} />
              </Col>
            ))
          ) : (
            <div className="empty mt-4">
              <h2>No stories found</h2>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CategoriesPage;
