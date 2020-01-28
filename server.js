/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle responses */

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');

// const app = express();
// require('dotenv').config()

// app.use(logger('dev'));
// app.use(express.json());

// // Configure both serve-favicon & static middlewares
// // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));


// // The following "catch all" route (note the *)is necessary
// // for a SPA's client-side routing to properly work
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });

//    // Configure to use port 3001 instead of 3000 during
// // development to avoid collision with React's dev server
// const port = process.env.PORT || 3001;

// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`)
// });