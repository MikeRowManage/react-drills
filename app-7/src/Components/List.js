import React, {Component} from 'react'
import Todo from '/Users/michaelpriestley/Desktop/DevMtn/week-03/React-afternoon-project/Real-Afternoon-Project/react-drills/app-7/src/Components/Todo.js'

class List extends Component {
    render() {
    let list = this.props.task.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return <div>{list}</div>;
  }
}

export default List