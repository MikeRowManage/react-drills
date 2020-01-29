import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemList: ["Eggs", "Bacon", "Toast"]
      
    }

  }


render() { 
    let itemsToDisplay = this.state.itemList.map((element, index) => {
      return <h2 key={index}>{element}</h2>
      })
  
return <div className="App">{itemsToDisplay}</div>
}

}

export default App