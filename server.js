const express = require("express");
const cors = require("cors");
const app = express();
const storiesRouter = require("./src/api/stories");

app.use(cors());
app.use(express.json());

// Mount the storiesRouter to handle /api/stories routes
app.use("/api/stories", storiesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
