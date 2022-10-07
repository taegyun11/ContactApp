import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactList from './ContactList'


const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={2}>
            <img width={60} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"/>
        </Col>
        <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem