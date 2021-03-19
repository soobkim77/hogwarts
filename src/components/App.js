import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from './PigContainer'


class App extends Component {
  state ={
    pigs: hogs
  }

  handleName = () => {
    this.state.pigs.sort((a, b) => (a.name > b.name ? 1 : -1))
    this.setState({
        pigs: this.state.pigs
    })
  }
   handleWeight = () => {
    this.state.pigs.sort((a, b) => (a.weight > b.weight ? 1 : -1))
    this.setState({
        pigs: this.state.pigs
    })}


  handleChange = (event) => {
    console.log(event.target.value)
    if(event.target.value == "true"){
      let greasedHogs = hogs.filter(hog => hog.greased === true)
      this.setState({
      pigs: greasedHogs
      })} else if(event.target.value == "false"){
        let greasedHogs = hogs.filter(hog => hog.greased === false)
      this.setState({
      pigs: greasedHogs
      })} else {
        this.setState({
          pigs: hogs
      })
      }
  }


  render() {
    return (
     
      <div className="App">
        <Nav />
        <PigContainer onChange={this.handleChange} onWeight={this.handleWeight}onNameClick={this.handleName}hogs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;
