import React, { Component } from 'react';
import GetThis from '../utils/helpers';
import { Button } from 'react-bootstrap';
import Results from './Results.js';
import '../css/MakeOwn.css';

class MakeOwn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      baseLiquor: '',
      response: [],
      drinkNames: []
    }
  }


  handleClickBase(liquor) {
    console.log(liquor + ' clicked');
    this.setState({
      baseLiquor: liquor
    });
  }

  pickRandom(results) {
    const randomPicks = [];
    while (randomPicks.length < 5) {
      let idx = Math.floor(Math.random() * results.length);
      if (!randomPicks.includes(idx)) {
        randomPicks.push(idx);
      }
    }
    console.log('randoms:', randomPicks);
    return randomPicks;
  }

  handleClickGo(baseliquor) {
    console.log('go clicked')
    GetThis.getBase(baseliquor)
    .then((json) => {
      const results = json.data.result;
      console.log('json.data.result: ', results);
      console.log('# drinks found:', results.length);

      let drinkIndexes = this.pickRandom(results);
      let drinksToDisplay = [];
      drinkIndexes.forEach(idx => {
        drinksToDisplay.push(results[idx])
      })
      console.log('d.t.d:', drinksToDisplay);

      const names = [];
      drinksToDisplay.forEach(item => {
        names.push(item.id);
      })
      console.log('names:', names);

      this.setState({
        response: drinksToDisplay,
        drinkNames: names,
      })

    });
  }

  render(){
    return(
      <div>
        <div className='base'>
          <div className='wrapper1'>
            <Button bsStyle="success" bsSize="large" className='liquor' onClick={() => this.handleClickGo('brandy')}>Brandy</Button>
            <Button bsStyle="info" bsSize="large" className='liquor' onClick={() => this.handleClickGo('gin')}>Gin</Button>
            <Button bsStyle="primary" bsSize="large" className='liquor' onClick={() => this.handleClickGo('rum')}>Rum</Button>
            <Button bsStyle="danger" bsSize="large" className='liquor' onClick={() => this.handleClickGo('tequila')}>Tequila</Button>
            <Button bsStyle="warning" bsSize="large" className='liquor' onClick={() => this.handleClickGo('vodka')}>Vodka</Button>
            <Button bsStyle="success" bsSize="large" className='liquor' onClick={() => this.handleClickGo('whisky')}>Whiskey</Button>
          </div>
        </div>
        <Results drink={this.state.response} names={this.state.drinkNames}/>
      </div>
    )
  }

}

export default MakeOwn


