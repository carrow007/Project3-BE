import React,{ Component } from 'react'
import Firebase from '../utils/database.js'
import { Button } from 'react-bootstrap';
import '../css/Favorites.css';

class Favorite extends Component{
    constructor(props){
    super(props);
    this.state = {
      uid: localStorage.getItem("USERID")
    }
  }

  saveData(data,uid){
    // const url = {Drink: data}
    const url = data;
    Firebase.saveDrink(url,uid).then((res) => {
      console.log("Saved")
    })
  }

  onClick(){
    console.log("LOCALSTORAGE: ",localStorage.getItem("USERID"));
    const drinkObj = this.props.data
     console.log(drinkObj);
     console.log("TARGET:",this.props.uid);


  const arr = []
  const ingreds = []
  for (const variable in drinkObj) {
    if (variable === "name") {
       arr.push({name: drinkObj[variable]})
    }
    if (variable === "descriptionPlain") {
       arr.push({instructions: drinkObj[variable]})
    }
    if (variable === "difficulty") {
      arr.push({difficulty: drinkObj[variable]})
    }
    if (variable === "videos") {
      // console.log("do:", drinkObj[variable][0].video)
      const fullVidUrl = this.props.baseUrl + drinkObj[variable][0].video;
      arr.push({fullVidUrl});
    }
    if (variable === "ingredients") {
      drinkObj[variable].map(function(ingredient, i){
        ingreds.push(ingredient.textPlain);
      });
      arr.push({ingredients: ingreds})
      arr.push({isRemoved: false})
    }
  }

  const cocktailObj = {};
  cocktailObj['image'] = this.props.cocktail;
  arr.push(cocktailObj);
  console.log('ARR:', arr);
  console.log("UID: ",this.state.uid);
  this.saveData(arr,this.state.uid);
}

render(){
  return(
    <div className='favs'>
      <Button bsStyle='danger' className='button' onClick={(e) =>this.onClick()}>
      Favorite
      </Button>
    </div>
  )
}
}
export default Favorite
