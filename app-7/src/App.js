import React, {Component} from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'


class App extends Component {
    constructor() {
        super()

        this.state = {
            list: []
        }
    }

    handleAddNewTask = (val) => {
        this.setState({
            list: [...this.state.list, val]
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>My To-Do List</h1>
                <NewTask add={this.handleAddNewTask}/>
                <List task={this.state.list}/>
            </div>
        )
    }

}

export default App
