import React, {Component} from 'react'
import styled from 'styled-components'
// Set css to Button 

const Button = styled.button`
padding: 30px;
background-color: white;
border: 1px solid #888;
margin-top:10 px;
height: 80px;
weight: 80px;
`

let itemData = {
  "idMongo" : "Mongo_id_1",
  "id" : 1,
  "nameSys" : "222"
}

class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      objData: itemData
    }
    this.sentItemName = this.sentItemName.bind(this)
  }
  
  sentItemName(){
    let {submit} = this.props
    submit(this.state.objData.nameSys)
  }

  render(){
    let {objData} = this.state
    this.sentItemName(this.state.objData.nameSys)
      return(
        <div>
            <Button>{objData.nameSys}</Button>
        </div>
      )
  }
}

export default Item 