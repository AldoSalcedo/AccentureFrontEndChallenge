import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const PostDetails = ({ post }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Link to={`/`}>
            <Card
              style={{
                backgroundImage: `url(https://source.unsplash.com/random)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '300px',
                position: 'relative',
              }}
            >
              <Card.Body
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '10px',
                  color: 'white',
                }}
              >
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
