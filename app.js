const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv/config');

const app = express();

//MiddlLewares

// app.use("/posts", () => {
//   console.log("This is a middleware running");
// });

app.use(cors());
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);




//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});


//DB Connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('conected to DB!');
});

//START LISTEINGN TO THE SERVER
app.listen(3000, () => console.log('Server running at 3000'));
