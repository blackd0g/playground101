import React, {Component} from 'react'
import styled from 'styled-components'
import grassData from './grass'

console.log(grassData)
// Set css to Button 

const Button = styled.button`
padding: 30px;
background-color: white;
border: 1px solid #888;
margin-top:10 px;
height: 80px;
`
/*
let grassData = {
  "idMongo" : "Mongo_id_1",
  "id" : 1,
  "nameSys" : "grass"
}*/

class GrassObj extends Component {
  
    // เก็บค่าจาก input ที่มีการ add 
    constructor(props){
      super(props)
      this.state = {
        objData: grassData
      }
      this.objClicked = this.objClicked.bind(this)      
    }
    
    objClicked(){
      let {submit} = this.props
      submit(this.state.objData.nameSys)
    }

    render(){
      let {nameSys} = this.state.objData
      return(
        <div>
          <Button onClick={this.objClicked}> {nameSys} </Button>
        </div>
    )
  }

}
export default GrassObj