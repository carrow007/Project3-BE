import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Results from './Results.js'
import GetThis from '../utils/helpers';
import Featured from '../utils/featured';
import '../css/SearchDrink.css';

class SearchDrink extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      response: [],
      display: 'Featured',
      mixer: ''
    }
  }

  componentDidMount() {
    let featuredDrink = Featured.getRandomFeature();
    // console.log('FD:', featuredDrink);

    GetThis.searchByDrink(featuredDrink)
    .then((json) => {
      console.log('json.data:', json.data.result);

      this.setState({
        response: json.data.result,
        searchText: featuredDrink,
        mixer: featuredDrink
      });
    });
  }

  handleChange(event) {
    event.preventDefault();
    // console.log('e.t.v:', event.target.value);
    this.setState({
      searchText: event.target.value
    })
  }

  handleClick(event){
    event.preventDefault();
    let convertedText = this.state.searchText.toLowerCase().split(' ').join('-');
    GetThis.searchByDrink(convertedText)
    .then((json) => {
      console.log('json.data.result:', json.data.result);
      if (json.data.result.length) {
        this.setState({
          display: 'Results',
          response: json.data.result,
          mixer: this.state.searchText.toLowerCase().split(' ').join('-')
        })
      } else {
        this.setState({
          display: 'Drink Not Found'
        })
      }
      // console.log('t.s.r:', this.state.response);
    });

  }

  render() {
    return (
      <div className="SearchDrink">
        <h1 className='heading'>Have a Drink!</h1>
        <form className='drinkForm'>
          <input className='input' type='text' onChange={(event) => this.handleChange(event)}></input>
          <Button onClick={(event) => this.handleClick(event)} bsStyle='default' className='goButton'>Go
          </Button>
        </form>
        <Results drink={this.state.response} names={[this.state.mixer]} display={this.state.display}/>
      </div>
    );
  }
}

export default SearchDrink;
