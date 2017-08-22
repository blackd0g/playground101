import React, {Component} from 'react'

class Func extends Component {
  constructor(props){
    super(props)
  }
    render(){
      let {propInGameSubmit} = this.props
      
      return(
        <div>
          Show Function Here : 555{propInGameSubmit}
        </div>
      )
    }
}

export default Func 