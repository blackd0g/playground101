import React, { Component } from 'react';
import GrassObj from './GrassObj'
import Func from './Func'
import Item from './Item'
class Display extends Component {
  //<img src={logo} className="App-logo" alt="logo" />
  constructor(props){
    super(props)
    this.state = {
      objectName : null,
      itemName : '111'
    }
    this.getObjectName = this.getObjectName.bind(this)
    this.getItemName = this.getItemName.bind(this)
  }
  getObjectName(objName){
    this.setState({
      objectName: objName
    })
  }
  getItemName(iteName){
    this.setState({
      itemName: iteName
    })
  }

  render() {
    let {objectName} = this.state
    let {itemName} = this.state
    let propInGame = [objectName,itemName]
    return (
      <div> 
        <br />
        <GrassObj submit={this.getObjectName}/>
        {/* <Item submit={this.getItemName}/> */}
        <br />
        Show obj name : {objectName}
        , item name : {itemName}
        <br/>
        <Func propInGameSubmit={propInGame}/>
      </div>
    );
  }
}

export default Display;