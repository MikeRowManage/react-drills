import React, {Component} from 'react'


class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    userInput: ""
  }
}

  handleChange = (val) => {
    this.setState({userInput: val})
  }

  render() {
    return <div>
            <input className="inputText" onChange={(e) => {this.handleChange(e.target.value)}}/>
             <p>{this.state.userInput}</p>
          </div>
  }
}

export default App
