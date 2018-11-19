import React, { Component } from 'react';
import Header from "./Header"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Info from "./Info"
import Footer from "./Footer"
library.add(fab, faCheckSquare, faCoffee);


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchMovie: false,
    }
  }

  change = () =>{
    if(this.state.searchMovie){
      // refs.input.style.display = "block"
    }
    this.setState({searchMovie: true})
  }

  render(){
    return (
      <div>
        <Header change = {this.change}/>
        <Info />
        <Footer />  
      </div>
    );
  }
}

export default App;
