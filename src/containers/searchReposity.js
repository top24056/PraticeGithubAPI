import React from 'react'
import { Row,Col } from 'react-bootstrap'

import InputSearchName from '../components/inputSearchName'
import TableList from '../components/TableList'

class searchReposityPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <Row>
          <Col>
            <h2>Search Github Repositories</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputSearchName/>
          </Col>
        </Row>
        <TableList/>
      </div>
    )
  }
}


export default searchReposityPage
