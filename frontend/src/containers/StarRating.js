import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../css/StarRating.css'

class StarRating extends Component {
  constructor() {
    super()
      this.state = {
        rating: 0
      }
  }


  onStarClick(value){
    this.setState = ({
      rating: value
    })
  }


  render() {
    let { rating } = this.state
    console.log('rating:', this.state.rating)
    let starRating = this;
    return (
        <div>
          <h3 className='rating'> Rate this Drink!</h3>
            <StarRatingComponent className="stars" starCount={5} value={rating}
              onClick={() => onStarClick()} />
        </div>
      )
  }
}

export default StarRating


// Referenced https://github.com/voronianski/react-star-rating-component for this component
