import React, { Component } from 'react';
import Header from "./Header"
import axios from "axios"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Info from "./Info"
import Footer from "./Footer"
import Search from "./Search"
import { Route, Switch } from "react-router-dom";
library.add(fab, faCheckSquare, faCoffee);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      text: "",
      data: {},
      modalIsOpen: false,
      searchData: [],
      id: ""
    }
  }

  getMovie = (id) => {
    console.log(id)
    this.setState({
      modalIsOpen: true,
      id: id
    })
  }

  handleToggle = () => {
    this.setState({
      toggle: this.state.toggle ? false : true
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }
  handleSubmit = (e) => {
    if (this.state.text.length > 4) {
      alert("cannot be over 4 digits")
    } else if (parseInt(this.state.text) > 2018) {
      alert(`It's not ${this.state.text} yet`)
    } else if(parseInt(this.state.text) < 2000){
      alert("API DID NOT PROVID UNDER 2000")
    }
    if(this.state.searchData.length > 1){
      this.setState({
        searchData: []
      })
    }
    e.preventDefault();
    const forwarder = "https://vschool-cors.herokuapp.com?url=";
    const url = `https://hydramovies.com/api-v2/?source=http://hydramovies.com/api-v2/current-Movie-Data.csv&movie_year=${this.state.text}`;
    axios.get(forwarder + url).then(res => {
      console.log(res)
      let newData = res.data;
      console.log(newData)
      for (let each in newData) {
        this.setState(prevState => {
          return {
            searchData: [...prevState.searchData, newData[each]],
            text: "",
          }
        })
      }
    })
  }

  render() {
    const search = this.state.searchData.filter(each => each.imdb_id === this.state.id)
    console.log(search);
    return (
      <div>
        <Header
          toggle={this.state.toggle}
          text={this.state.text}
          data={this.state.data}
          handleToggle={this.handleToggle}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} 
          searchData = {this.state.searchData}/>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route path="/search" render={props =>
            <Search getMovie={this.getMovie}
              searchData={this.state.searchData} 
              modalIsOpen = {this.state.modalIsOpen}
              closeModal = {this.closeModal}
              search = {search}
              />
          } />
        </Switch>
        <Footer />
        }
      </div>
    );
  }
}

export default App;
