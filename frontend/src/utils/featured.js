const Featured = {

  getRandomFeature: function() {
    const drinks = ['negroni', 'skylab', 'mexican-lover', 'maidens-blush-cocktail', 'russian-ruble', 'mojito'];
    let rando = Math.floor(Math.random() * drinks.length);
    return drinks[rando];
  }
}

export default Featured
