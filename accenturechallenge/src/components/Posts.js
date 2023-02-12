import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Posts = ({ posts }) => {
  return (
    <>
      <Container>
        <Row>
          {posts?.map((post) => (
            <Col md={6} xs={12} key={post.id} style={{ marginBottom: '20px' }}>
              <Link to={`/posts/${post.id}`}>
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
          ))}
        </Row>
      </Container>
    </>
  )
}
