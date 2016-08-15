import React, { Component } from 'react'
import Favorites from './Favorites.js'
import '../css/Results.css';
import { Button, Modal } from 'react-bootstrap';
import StarRating from './StarRating.js'

class Results extends Component{
constructor(props){
  super(props);
  this.state = {
    showModal: false
  }
}

makeImgUrls(index) {
  const size = '200x250/';
  const image = '//assets.absolutdrinks.com/drinks/solid-background-black/soft-shadow/floor-reflection/' + size + this.props.names[index] + '.jpg';
  // console.log('imgUrl:', image);
  return image;
}

openModal(){
  // console.log('show:', this.state.showModal);
  this.setState({
    showModal: true
  });
}

closeModal(){
  // console.log('close modal clicked');
  this.setState({
    showModal: false
  });
}

renderDrink(drink,i) {
  const image = this.makeImgUrls(i);
  const youTube = 'https://www.youtube.com/embed/';
  const ingredArr = [];

  drink.ingredients.forEach(ingred => {
    ingredArr.push(ingred.textPlain)
  })
  const ingredStr = ingredArr.join(', ');

  return(
    <div className='drinkDiv' key={i}>
      <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Demonstration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe className="iframVid"
            src={youTube + drink.videos[0].video}
            width='500'
            height='400'
            frameBorder='0'
            allowFullScreen>
          </iframe>
        </Modal.Body>
      </Modal>

      <h2 className="display">{this.props.display}</h2>
      <ul className="resultsUl">
        <li className="resultsLi"><img className='pic' src={image}></img></li>
        <li className="resultsLi">Name: {drink.name}</li>
        <li className="resultsLi">Ingredients: {ingredStr}</li>
        <li className="resultsLi">Instructions: {drink.descriptionPlain}</li>
        <li className="resultsLi">Difficulty: {drink.skill.name}</li>
      </ul>
      <div className='container'>
        <Button className='button' bsStyle="primary" onClick={() => this.openModal()}>
            Watch Video
        </Button>
        <Favorites data={drink} baseUrl={youTube} cocktail={image} />
        <StarRating />
      </div>
    </div>
  )
}


  render(){
    const drinksdata = this.props.drink
    return(
      <div>
          {drinksdata.length ? drinksdata.map((drink,i)=> this.renderDrink(drink,i)):""}
      </div>
    )
  }
}

export default Results
