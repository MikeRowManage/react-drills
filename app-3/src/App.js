import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super()
  
  this.state = {
    foodList: ["milk", "eggs", "cheese", "bread"],
    userInput: ''
  }

  
  }
  handleChange = (val) => {
    this.setState ({
      userInput: val
    })
  }

  render() {
    let foodListDisplay = this.state.foodList
      .filter((element, index) => {
        return element.includes(this.state.userInput);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      })
  return <div className='App'>
              <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
              {foodListDisplay}</div>
  }
}


export default App;
