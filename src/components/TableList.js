import React from 'react'
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'
import { Table } from 'react-bootstrap'
import { ScaleLoader } from 'react-spinners'

import {searchname} from '../actions/searchReposity'

class TableList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      item : [],
      loading : false,
      page : 1,
      count : 0
    }
  }

  renderItems = () => {
    return this.props.info.map((item,i) => 
      <tr key ={i}>
        <td>{i+1}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
      </tr>
    )
  }

  renderWaypoint = () => {
    if(this.props.info.length > 0){
      return(
        <Waypoint
          onEnter={this.loadMoreItems}
        />
      )
    }
  }


  loadMoreItems = () => {
    let page
    if(this.state.name === this.props.name){
      page = this.state.page + 1
    }
    else{
      page = 2
    }
    console.log(this.props.info.length,this.props.total)

    if(this.props.info.length === this.props.total){
      this.setState({
        loading: false
      })
    }
    else{
      this.props.searchPage(this.props.name,page)
      this.setState({
        page,
        loading: true,
        name : this.props.name
      })
    }
  }

  render(){
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </Table>
        {this.renderWaypoint()}
        <ScaleLoader
          loading = {this.state.loading}
          color = {'#5a6268'}
        />
      </div>
      
    )
  }
}


const mapStateToProps = state => ({
  info : state.searchByName.info,
  name : state.searchByName.name,
  total : state.searchByName.totalinfo
})

const mapDispatchToProps = {
  searchPage : searchname
}

const TableListConnect = connect(mapStateToProps,mapDispatchToProps)(TableList)
export default TableListConnect