var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/dist'));

// app.get('/', function(request, response) {
//   response.send('Hello World!');
// });

app.use('/', express.static(__dirname + '/dist'))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
