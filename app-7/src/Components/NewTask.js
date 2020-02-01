import React, {Component} from 'react'

class NewTask extends Component {
    constructor() {
        super()
    
    this.state = {
        userInput: ''
    }
    
    }

    handleUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }

    handleAddToList = () => {
        this.props.add(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render() {
        return(
            <div>
                <input value={this.state.userInput}
                placeholder="Enter New Task Here" 
                onChange={(e) => this.handleUserInput(e.target.value)}/>
                <button onClick={this.handleAddToList}>ADD</button>
            </div>
        )
    }
}

export default NewTask