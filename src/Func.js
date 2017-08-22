import React, {Component} from 'react'

class Func extends Component {
  constructor(props){
    super(props)
  }
    render(){
      let {propInGameSubmit} = this.props
      
      return(
        <div>
          Show Function Here : {propInGameSubmit}
        </div>
      )
    }
}

export default Func 