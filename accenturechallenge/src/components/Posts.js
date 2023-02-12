import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import fetcher from '../fetcher'

const Posts = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher()
      setPosts(Array.isArray(data) ? data : [])
    }

    fetchData()
  }, [])

  return (
    <>
      <Container>
        <Row>
          {posts.map((post) => (
            <Col md={6} xs={12} key={post.id} style={{ marginBottom: '20px' }}>
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
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Posts
