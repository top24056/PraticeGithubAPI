import React from 'react'
import { connect } from 'react-redux'
import {InputGroup, FormControl} from 'react-bootstrap'
import {searchname} from '../actions/searchReposity'

class InputSearchName extends React.Component{

  constructor(props){
    super(props)
    this.state = {
    }
  }

  inputChange = (e) => {
    this.props.searchname(e.target.value,1)
  }


  render(){
    return(
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Repositories name"
          aria-label="Repositories name"
          aria-describedby="basic-addon2"
          onChange = {e => this.inputChange(e)}
        />
      </InputGroup>
    )
  }
}


const mapStateToProps = state => ({
  info : state.searchByName.info,
})

const mapDispatchToProps = {
  searchname : searchname
}

const InputSearchNameConnect = connect(mapStateToProps,mapDispatchToProps)(InputSearchName)
export default InputSearchNameConnect