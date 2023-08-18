import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPage from "../src/pages/storyPage";
import StoryCardContainer from "./components/storyCardContainer.jsx";
import CategoriesPage from "./pages/categoriesPage";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:5000/api/stories"; // Update to your server's address

const App = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
   
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  }, []);
  

  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={<StoryCardContainer data={post} />}
      />
   
        <Route path="/api/stories/:story_title" element={<StoryPage data={post} />} />
        <Route path="/api/stories/category/:categories" element={<CategoriesPage data={post} />} />
        <Route path="/api/stories/searchbar/:search" element={<StoryCardContainer data={post} />} />

      </Routes>
    </Router>
  );
};

export default App;
