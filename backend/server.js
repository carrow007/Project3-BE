var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser');
var request     = require('request');
var app         = express();


/* let's add the ability ajax to our server from anywhere! */
app.use(cors());

/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));

/* ADDb api search */
app.get('/drinks/search/:drinkName', function(req, res) {
  console.log(req.params);

  /*
  example of full query to ADDb:
  https://addb.absolutdrinks.com/drinks/absolut-cosmopolitan?apiKey=66c01df4adb3407db622b6f88ebdd5c8
  */

  var baseUrl = 'https://addb.absolutdrinks.com/drinks/';
  let searchText = req.params.drinkName;
  // console.log('r.body', req.data);
  // let searchText = 'absolut-cosmopolitan';
  console.log('ST:', searchText);
  var apiString = '/?apiKey=';
  var ADDB_API_KEY = process.env.ADDB_API_KEY;
  var fullQuery = baseUrl + searchText + apiString + ADDB_API_KEY;
  console.log("fullQuery:", fullQuery); // prints to terminal

  request({
    url: fullQuery,
    method: 'GET',
    callback: function(error, response, body) {
      console.log(body);
      res.send(body);
    }
  })
}); // end post request

app.listen(3333, function(){
  console.log('listen to events on a "port".')
});
