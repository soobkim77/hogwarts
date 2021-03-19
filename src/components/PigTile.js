import React, { Component } from 'react';
import PigTileFront from './PigTileFront'
import PigTileBack from './PigTileBack'


export default class PigTile extends Component {

    state={
        isVisible: true
    }

    handleClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
  

    render() {
      return (
        <div className="ui eight wide column" onClick={this.handleClick}>
          {this.state.isVisible ? <PigTileFront hog={this.props.hog} /> : <PigTileBack hog={this.props.hog}/> }
          </div>
      )
    }
  }