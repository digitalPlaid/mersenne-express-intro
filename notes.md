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

# HTTP Jargon

## HTTP
"HyperText Transfer Protocol"
a way to use networks, the internet, to send requests back and forth
We live in HTTP's world

The context for all of this describes  requests, responses, and how to structure them

## Request
What the client(browser) sends to the server

'''js
app.get('/quotes', function(req,res))
                             ^ req === requests
'''

## Response
What the server sends back to the client. This can be anything:
HTML, CSS, JS files (static content)
or 
objects, arrays, etc (dynamic content or data or JSON)

'''js
app.get('/quotes', function(req,res){
                                 ^ response
    // send back JSON data (array)
    res.send(['a', 'b', 'c'])
});
'''

## JSON
Javasscript Object Notation
The main format for data that's sent across the internet
Looks like js objects but with double quotes, for example:
'''json
[
    {
        "text": "...",
        "author": "...",
    }
]
'''

## URLs / Routes/ Paths
We use these terms somewhat interchangeably, though there are subtle differences.

The path is a _noun_, describing what type data we're workign on

Usually we're talking about the part after the main domain, like /dansPage,
rather than writing http://dansSite/dansPage

in express:
```js
app.get('/quotes', function(req, res))
//          ^ path / route / url
```

## Method
A _verb_ that describes what the client wants to do.

In HTTP, there are 4 main methods that we'll use:
- GET: retrieve some data from teh server
- POST: send some new data to the server
- PUT: Update some existing data on the server
- DELETE: delete some data from the server

In express:

```js
app.get('/quotes', function(req, res){
    //^ that's our verb, app here is the path
})
app.put('/quotes',...);
app.post('/quotes',...);
app.delete('/quotes',...)
```

## Body (requests and responses)

The body is part of the request, that contains the actual data that we're passing back and forth.

## Headers (requests and responses)

Extra meta-data that gets sent along with your request or response

## Status Code (responses only)
A number that represents that status of the request.
common status codes:
200 - everythings ok
201 - something was created
400 - client error - the client messed up, bad data, etc.
404 - Not Found - probably wrong url
500 - Server Error - Probably a JS bug in your server code

## Endpoint

The whole thing that we're listening for.

Path + Method = Endpoint

Includes:
- URL
- Method

```js
// Our GET /quotes endpoint:
app.get('/quotes', function(req, res) { // sort of like an event handler for a specific thing
    console.log('Ready to send back some quotes ');
    // console.log('request is: ', req); // has data about request that was made
    res.send(quotes); // array of quote objects

})
```

## API
The entire server, but specifically:
A bunch of endpoints = an api
"Application Programming Interface"
A way for programs to interface, communicate, with one another.
In our case, this will mean our endpoints are our api server.



## Postman
also an http client - it can also talk to our server
helps make requests and responses to our server


## AJAX
$.ajax()
it comes with jQuery


## starting your server:
in package.json under the scripts object put a line in that says:
"start": "node server/server.js"
and then type in npm start to the console and it will work.