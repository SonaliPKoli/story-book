import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";

import StoryCards from "./storyCards";
import { Link } from "react-router-dom";
import SearchIcon from "../search.svg";

const StoryCardContainer = (params) => {

  const [searchText, setSearchText] = useState("");
  const [storyArray, setStoryArray] = useState([]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };
  const stories=params.data;

  const onSearch = (searchText) => {
    const filteredStories = stories.filter((story) =>
      story.story_title.toLowerCase().includes(searchText.toLowerCase())
    );
    setStoryArray(filteredStories);
  };

  useEffect(() => {
    setStoryArray(stories);
  }, [stories]);

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
                <Link
                  to={`/api/stories/category/${encodeURIComponent("fairy tales")}`}
                  className="nav-link"
                >
               

                <h1 style={{ color: "white", fontSize: "20px" }}>
                    Fairy Tales
                  </h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/api/stories/category/animal stories`} className="nav-link">
                  <h1 style={{ color: "white", fontSize: "20px" }}>
                    Animal Stories
                  </h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/api/stories/category/moral stories`} className="nav-link">
                  <h1 style={{ color: "white", fontSize: "20px" }}>
                    Moral Stories
                  </h1>
                </Link>
              </Nav.Link>
              <Col xs={12} md={6} lg={4} className="mt-2 mt-md-0">
                <div className="d-flex align-items-center">
                  <input
                    labelName="Search posts"
                    type="text"
                    name="text"
                    className="search form-control"
                    placeholder="Search something..."
                    value={searchText}
                    onChange={handleSearchChange}
                  />
                  <img
                    src={SearchIcon}
                    alt="search"
                    height={30}
                    width={30}
                    className="ml-2"
                    onClick={() => onSearch(searchText)}
                  />
                </div>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          {storyArray?.length > 0 ? (
            storyArray.map((storyData) => (
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

export default StoryCardContainer;
