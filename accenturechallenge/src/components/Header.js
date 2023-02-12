import React from 'react'

import { Card, ButtonGroup, Button } from 'react-bootstrap'

export const Header = () => {
  return (
    <div className="header">
      <Card>
        <Card.Body>
          <Card.Subtitle
            className="mb-3"
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'orange',
            }}
          >
            [ Making your Life Easier ]
          </Card.Subtitle>
          <Card.Title>Discovering the World</Card.Title>
          <ButtonGroup aria-label="Toolbar with button groups">
            <Button variant="outline-secondary">All</Button>
            <Button variant="outline-secondary">Travel</Button>
            <Button variant="outline-secondary">Lifestyle</Button>
            <Button variant="outline-secondary">Bussiness</Button>
            <Button variant="outline-secondary">Food</Button>
            <Button variant="outline-secondary">Work</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  )
}
