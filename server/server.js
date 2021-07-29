console.log('Look ma, my first express app!');

// Load the express library from node_modules/express
const express = require('express'); 
// leaving off file paths and whatnot causes node to search the node_modules folder

//Load the body parser module
const bodyParser = require('body-parser');

// to use express you have to call it as a function and it creates an "app" (server)
const app = express(); 
// the return value is just called an app which in turn represents our server

// My data!
const quotes = [
    {
        text: 'Debugging is like being the detective in the crime movie where you are also the murderer.',
        author: 'Filipe Fortes',
    },
    {
        text: 'If you want to increase your success rate, double your failure rate.',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

// Tell express where to find all
// of our "public" files
// aka "client-side" files
// aka "static assets"
app.use(express.static('./server/public'));

// Setup body parser
// Tells express how to read data from the client
// either as JSON, or url-encoded
app.use(bodyParser.json());
// urlencoded is just another way to send data, like JSON, we want to support both
app.use(bodyParser.urlencoded({ extended: true}));

// manually you can do more sophisticated things:
// Listen for requests coming to a specific URL: http://localhost:5000/quotes
// app.get('end of url', function(request, response) {//do stuff})
app.get('/quotes', (req, res) => { // sort of like an event handler for a specific thing
    console.log('Ready to send back some quotes ');
    // console.log('request is: ', req); // has data about request that was made
    res.send(quotes); // array of quote objects

})

// GET /first-quote
app.get('/first-quote', (req, res) => {
    res.send(quotes[0]);
})

// POST /quotes
app.post('/quotes', (req, res) => {
    console.log('Woohoo, we got a new quote!');

    // Body parser gives us req.body
    // whcih includes the data from our client
    console.log('req.body: ', req.body);
    let newQuote = req.body;

    // Validate our new quote
    if (!newQuote.author || !newQuote.text) {
        // Set status code to 400 (client messed up)
        // and send back a useful message in the response body
        res.status(400).send({
            message: 'Missing a required field! Try again, and harder.'
        });
        // End the function!
        // otherwise, we'll end up sending multiple responses and get an error
        return;
    }
    quotes.push(newQuote);
    res.sendStatus(201);
});


// Listen for requests:
const port = 5000; // by convention choose a port higher than 3000
app.listen(port, () => {
    // kind of like our onReady function with jQuery
    // this gets called when our app is up and running
    console.log(`App is up and running on localhost:${port}`);
});

