import { Card, ButtonGroup, Button } from 'react-bootstrap'
import { CreatePost } from './CreatePost'

export const Header = (props) => {
  const { title, subtitle, buttonLabels } = props

  return (
    <div className="header">
      <Card style={{ height: '13rem', margin: '2rem 5rem 1.5rem 5rem' }}>
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
          <ButtonGroup aria-label="Toolbar with button groups">
            {buttonLabels.map((label, index) => (
              <Button variant="outline-secondary" key={index}>
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  )
}
