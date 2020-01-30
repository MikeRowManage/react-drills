import React, {Component} from 'react'

class Image extends Component {

    render() {
        return (
        <div>
            <img src={this.props.url} />
            <div>"Safety" Training</div>
        </div>
        )}
}

export default Image