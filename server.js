// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Greetings :)</h1>'
    )
  } else if (request.url === '/random-joke') {
    response.end(
      '<h1>Random Joke</h1>' +
      '<a href="/">Back to Home</a>' +
      jokes[Math.floor(Math.random() * 30) % 3]
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Animal</h1>' +
      '<a href="/">Back to Home</a>' +
      '<p>Chocolate Lab</p>' +
      '<img src="https://s-media-cache-ak0.pinimg.com/originals/76/c7/5a/76c75abfd9544c20c18ef8668c9b7664.jpg">'
    )
  } else {
    response.end(
      '<h1>Page ' + request.url + ' not found! 404</h1>' +
      '<a href="/">Back to Home</a>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080

server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

var jokes = [
  '<p>Knock, knock!</p>' +
  '<p>Who’s there?</p>' +
  '<p>Opportunity!</p>' +
  '<p>That is impossible. Opportunity doesn’t come knocking twice!</p>',

  '<p>Knock, knock!</p>' +
  '<p>Who’s there?</p>' +
  '<p>An extraterrestrial.</p>' +
  '<p>Extraterrestrial who?</p>' +
  '<p>What – how many extra-terrestrials do you know?</p>',

  '<p>Knock, knock!</p>' +
  '<p>Who’s there?</p>' +
  '<p>The door</p>'
]
