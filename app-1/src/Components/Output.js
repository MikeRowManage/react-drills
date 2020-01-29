import React, {Component} from 'react'

class Output extends Component{
   constructor(props) {
       super(props)

        this.state = {
            mirroredInput: ''
        }
}
   
        updateOutput = (val) => {
            this.state({mirroredInput: val})
        }
   
   render () {
   return <div className="textArea">this is my output Component</div>
   }
}

export default Output