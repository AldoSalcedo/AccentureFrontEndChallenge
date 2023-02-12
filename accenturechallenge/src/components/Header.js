import { Card, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'
import { CreatePost } from './CreatePost'

export const Header = (props) => {
  const { title, subtitle, buttonLabels } = props

  return (
    <div className="header">
      <Card style={{ height: '14rem', margin: '2rem 5rem 1.5rem 5rem' }}>
        <Card.Body>
          <Card.Subtitle
            className="mb-3"
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'orange',
            }}
          >
            {subtitle}
          </Card.Subtitle>
          <CreatePost />
          <Card.Title>{title}</Card.Title>
          <ButtonToolbar className="d-flex d-md-block">
            <ButtonGroup aria-label="Toolbar with button groups" size="sm">
              {buttonLabels.map((label, index) => (
                <Button variant="outline-secondary" key={index}>
                  {label}
                </Button>
              ))}
            </ButtonGroup>
          </ButtonToolbar>
        </Card.Body>
      </Card>
    </div>
  )
}
