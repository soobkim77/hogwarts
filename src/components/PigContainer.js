import React from 'react';
import PigTile from './PigTile'

export default class PigContainer extends React.Component{

    

    

    render(){
        return(
        <div>
            <div>
                <select onChange={this.props.onChange}>
                    <option value="true">Greased</option>
                    <option value="false">Not Greased</option>
                    <option value="all">All Pigs</option>
                </select>
                <button onClick={() => this.props.onNameClick(this.props.hogs)}>Sort by Name</button>
                <button onClick={()=>this.props.onWeight(this.props.hogs)}>Sort by Weight</button>
            </div>
            <div className="ui grid container">
            {this.props.hogs.map(pig => <PigTile hog={pig}/>)}
            </div> 
        </div>)
    }
}