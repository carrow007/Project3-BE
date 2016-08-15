import axios from 'axios';

const GetThis = {

  searchByDrink: function(searchTerm) {
    // console.log('searchTerm:', searchTerm);

    var beUrl = '/';
    // if (process.env.PORT) {
    //   beUrl = 'https://intense-castle-31240.herokuapp.com/';
    // } else {
    //   beUrl = 'http://localhost:8080/';
    // }

    return axios({
      method: 'GET',
      url: beUrl + 'drinks/' + searchTerm,
    });
  },

  getAll: function() {

    var beUrl = '/';
    // if (process.env.PORT) {
    //   beUrl = 'https://intense-castle-31240.herokuapp.com/';
    // } else {
    //   beUrl = 'http://localhost:8080/';
    // }

    return axios({
      method: 'GET',
      url: beUrl + 'drinks'
    });
  },

  getBase: function(searchTerm) {

    var beUrl = '/';
    // if (process.env.PORT) {
    //   beUrl = 'https://intense-castle-31240.herokuapp.com/';
    // } else {
    //   beUrl = 'http://localhost:8080/';
    // }

    return axios({
      method: 'GET',
      url: beUrl + 'base/' + searchTerm
    });
  }

}

export default GetThis
