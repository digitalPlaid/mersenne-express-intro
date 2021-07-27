## Notes on Express process:
---
//  in the terminal run the following commands:
np init --yes
npm install express

// if you install something by accident:
npm uninstall <package-name>


import express // const express = require('express'); 
call it to create an app // const app = express()
start listening to a port // app.listen(port, function() { // do stuff}


// create a new folder in your main project folder
    // call it what you like. in this case it's <server> w/o brackets

// host server code in its own folder
    // have a folder called public in there where you'll store index.html


// if you need to kill a server:
killall -9 node