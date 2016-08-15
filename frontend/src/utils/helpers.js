import axios from 'axios';

const GetThis = {

  searchByDrink: function(searchTerm) {
    // console.log('searchTerm:', searchTerm);
    const beUrl = 'http://localhost:3333/';
    // const beUrl = 'https://intense-castle-31240.herokuapp.com/';

    return axios({
      method: 'GET',
      url: beUrl + 'drinks/' + searchTerm,
    });
  },

  getAll: function() {
    const beUrl = 'http://localhost:3333/';
    // const beUrl = 'https://intense-castle-31240.herokuapp.com/';

    return axios({
      method: 'GET',
      url: beUrl + 'drinks'
    });
  },

  getBase: function(searchTerm) {
    const beUrl = 'http://localhost:3333/';
    // const beUrl = 'https://intense-castle-31240.herokuapp.com/';

    return axios({
      method: 'GET',
      url: beUrl + 'base/' + searchTerm
    });
  }

}

export default GetThis
