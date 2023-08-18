import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "../../src/App.css";

const StoryCards = ({ data }) => {
  if (!data) {
    // Handle the case where data is empty or undefined
    return null; // You can return a placeholder or nothing if data is not available
  }

  const { story_title, story_tagline, card_image } = data;

  const cardStyle = {
    width: "18rem",
    height: "100%", // Set a fixed height for the card
    border: "1px solid black",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "2rem",
    position: "relative", // Add this property to allow absolute positioning of the button
  };

  const cardBodyStyle = {
    flexGrow: 1, // Allow the Card.Body to grow to fill the remaining space
  };

  const buttonStyle = {
    position: "absolute", // Position the button absolutely within the card
    bottom: "10px", // Adjust this value to control the distance from the bottom
    left: "50%", // Center the button horizontally within the card
    transform: "translateX(-50%)", // Center the button using a transform
  };

  return (
    <Card style={cardStyle} className="card">
      <Card.Img variant="top" src={card_image} height={200} width={300} />
      <Card.Body style={cardBodyStyle}>
        <Card.Title>{story_title}</Card.Title>
        <Card.Text>{story_tagline}</Card.Text>
      </Card.Body>
      <Link to={`/api/stories/${story_title}`}>
        <Button variant="primary" style={buttonStyle}>
          Read Story
        </Button>
      </Link>
    </Card>
  );
};

export default StoryCards;
