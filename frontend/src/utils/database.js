export default {

  saveDrink: function(url,uid){
    const fetchSettings = {
     method: "POST",
     headers: new Headers({
       'Content-Type': 'application/json'
     }),
     body:JSON.stringify(url)
    }
   return fetch('https://drinksonus-8ab97.firebaseio.com/users/'+uid+'/favs.json',fetchSettings).then((response) => {
        return response.json();
     });
  },
  viewFavs: function(uid){
    const fetchSettings = {
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('https://drinksonus-8ab97.firebaseio.com/users/'+uid+'/favs.json',fetchSettings).then((response) => {
      // console.log(response);
     return response.json();
  });
  },

  delete: function(fireId,uid){
      const fetchSettings = {
        method: 'DELETE'
      }
      return fetch('https://drinksonus-8ab97.firebaseio.com/users/'+uid+'/favs/' + fireId +'.json', fetchSettings).then((response) => {
        // console.log('RESP:', response)
        return response.json();
      });
    }
  }
