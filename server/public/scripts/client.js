$(document).ready(onReady);

function onReady() {
    console.log('So ready!');

    $('img').hide().fadeIn(5000);

    // On page load, grab quote data from the server
    getQuotes();
};

function getQuotes() {
    // AJAX!!! - it is a tech that jquery helps us with - it means we're doing
        // an http request from the client to the server
        // specifically it helps us make an HTTP request to our server to our Get endpoint
    // this calls the function in server.js
    // defined in 'app.get('/quotes')'
    $.ajax({
        // Tell AJAX what endpoint to hit
        // endpoint = url + method
        url: '/quotes',
        method: 'GET'
    })
        // Network requests take a LONG time
        // (millisecond!). wait for the request to complete, and then,
        // run this function.
        .then(function(response) {
            console.log('GET /quotes response: ', response);
                // Render quotes w/jQuery
            let quoteList = $('#quotes');
            // Loop through array of quotes;
            for (let quote of response) {
            // Rend a <li> with each quote.
            quoteList.append(`
            <li>
                ${quote.text}<br>
                <em> -- by ${quote.author}</em>
            </li>
            `)
            }
        })
}