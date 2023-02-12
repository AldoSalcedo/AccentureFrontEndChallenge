import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
    <Container>
      <Row>
        {posts.map((post) => (
          <Col md={6} xs={12} key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Posts
