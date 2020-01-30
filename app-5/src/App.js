import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image'

class App extends Component{

  render(props) {
   return (
    <div className="App">
      <Image url={"https://images-na.ssl-images-amazon.com/images/I/61L3EtuK49L._AC_SL1296_.jpg"} />
    </div>

   )}
}

export default App;
