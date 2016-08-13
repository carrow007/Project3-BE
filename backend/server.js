var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser');
var request     = require('request');
var app         = express();

const baseUrl = 'https://addb.absolutdrinks.com/drinks/';
const apiString = '/?apiKey=';
const ADDB_API_KEY = process.env.ADDB_API_KEY;

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());

/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));

/* ADDb api search */
app.get('/drinks/:drinkName', function(req, res) {
  // console.log(req.params);

  /*
  example of full query to ADDb:
  https://addb.absolutdrinks.com/drinks/absolut-cosmopolitan?apiKey=66c01df4adb3407db622b6f88ebdd5c8
  */

  const searchText = req.params.drinkName;
  // console.log('r.body', req.data);
  console.log('ST:', searchText);
  const fullQuery = baseUrl + searchText + apiString + ADDB_API_KEY;
  console.log("fullQuery:", fullQuery);

  request({
    url: fullQuery,
    method: 'GET',
    callback: function(error, response, body) {
      // console.log(body);
      res.send(body);
    }
  })
});

app.get('/base/:drinkBase', function(req, res) {
  const paging = '&pageSize=4000';
  const endpoint = 'withtype/'
  const searchText = req.params.drinkBase;
  console.log('myST:', searchText);
  const fullQuery = baseUrl + endpoint + searchText + apiString + ADDB_API_KEY + paging;
  console.log("fullQuery:", fullQuery);

  request({
    url: fullQuery,
    method: 'GET',
    callback: function(error, response, body) {
      // console.log(body);
      res.send(body);
    }
  })
});

// app.get('/base/:baseLiquor') {

// }


app.listen(3333, function(){
  console.log('listen to events on a "port".')
});
