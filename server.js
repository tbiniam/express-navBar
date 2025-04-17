// server.js

const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!

//root
// app.get('/', (req, res) => {
//     // your nav bar is on index.html
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.use(express.static(path.join(__dirname, 'public')));

// Route for Climate Crisis
app.get('/climate-crisis', (req, res) => {
  //TODO add code!
  res.redirect('https://cosmic-kleicha-84f046.netlify.app/');
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  //TODO add code
  res.redirect('https://tbiniam.github.io/typeSetting/')
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  //TODO add code
  res.redirect('https://tbiniam.github.io/deployTest/')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
