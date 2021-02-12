const express = require('express');

// Create a new web server (based on express)

const app = express();

// Server all the files in the www folder (make new folder for all frontend material)
app.use(express.static('Asset'));

// Start the webserver on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));