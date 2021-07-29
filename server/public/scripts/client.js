$(document).ready(onReady);

function onReady() {
    console.log('So ready!');

    $('img').hide().fadeIn(5000);

    // On page load, grab quote data from the server
    getQuotes();
    console.log('submitBtn', $('#submitBtn'));
    $('#submitBtn').on('click', addQuote);
};

function addQuote() {
    console.log('inside addQuote!');
    // Grab our quote data from the form
    let newQuote = {
        text: $('#quoteIn').val(),
        author: $('#authorIn').val()
    }
    console.log('new quote is: ', newQuote);
    $('#quoteIn').val('');
    $('#authorIn').val('');

    // POST our quote to /quotes
    $.ajax({
        method: "POST",
        url: "/quotes",
        // Send our data (object) to the server
        data: newQuote
    }).then((res) => {
        console.log('POST /quotes', res); // 400 error cuz we never sent the data..
        // refresh data from the server by calling the GET /quotes endpoint
        // and re-rendering the dom
        // make sure you only do this after the request is complete
        // in our .then() call.
        getQuotes();
    }).catch((error) => {
        // catches teh 400 error that is sent back if we don't ever send the data
        console.log('POST /quotes failed: ', error)
        $('body').append('<h2>Failed to save quote! Check your data, before you wreck your data</h2>')
    });
}

function getQuotes() {
    // AJAX!!! - it is a tech that jquery helps us with - it means we're doing
        // an http request from the client to the server
        // specifically it helps us make an HTTP request to our server to our Get endpoint
    // this calls the function in server.js
    // defined in 'app.get('/quotes')'
    $('#quotes').empty();
    $.ajax({
        // Tell AJAX what endpoint to hit
        // endpoint = url + method
        url: '/quotes',
        method: 'GET'
    })
        // Network requests take a LONG time
        // (millisecond!). wait for the request to complete, and then,
        // run this function.
        .then((response) => {
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





