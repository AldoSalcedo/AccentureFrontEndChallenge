import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IMG_URL } from '../APIs/BaseApi'

export const PostDetails = ({ post }) => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Row>
        <Col>
          <Card
            className="shadow-lg"
            style={{
              backgroundImage: `url(${IMG_URL})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '50rem',
              position: 'relative',
            }}
          >
            <Card.Body
              style={{
                position: 'absolute',
                bottom: '20rem',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '1rem',
              }}
            >
              <Card.Title
                className="text-center"
                style={{ fontSize: '2rem', margin: '5rem' }}
              >
                {post.title}
              </Card.Title>
              <Card.Text
                className="text-center"
                style={{ fontSize: '1.5rem', margin: '5rem' }}
              >
                {post.body}
              </Card.Text>
            </Card.Body>
          </Card>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Link to={`/`} className="btn btn-primary">
                Back
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
