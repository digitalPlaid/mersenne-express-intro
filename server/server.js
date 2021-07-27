console.log('Look ma, my first express app!');

// Load the express library from node_modules/express
const express = require('express'); 
// leaving off file paths and whatnot causes node to search the node_modules folder

// to use express you have to call it as a function and it creates an "app" (server)
const app = express(); 
// the return value is just called an app which in turn represents our server

// Tell express where to find all
// of our "public" files
// aka "client-side" files
// aka "static assets"
app.use(express.static('./server/public'));


// Listen for requests:
const port = 5000; // by convention choose a port higher than 3000
app.listen(port, function(){
    // kind of like our onReady function with jQuery
    // this gets called when our app is up and running
    console.log(`App is up and running on localhost:${port}`);
});

