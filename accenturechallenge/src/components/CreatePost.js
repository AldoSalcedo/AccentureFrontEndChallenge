import React, { useState } from 'react'
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '../APIs/BaseApi'

export const CreatePost = () => {
  const [showModal, setShowModal] = useState(false)
  const [post, setPost] = useState({
    title: '',
    description: '',
    userId: '',
  })

  const handleClose = () => {
    setShowModal(false)
    setPost({ title: '', description: '' })
  }

  const handleShow = () => setShowModal(true)

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    })
  }

  const savePost = async (post) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify({
          ...post,
          userId: Math.floor(Math.random() * 100),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      const newPost = await response.json()
      console.log(newPost)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (post.title && post.description) {
      savePost(post)
      handleClose()
    }
  }

  return (
    <>
      <Button
        variant="primary"
        className="btn-circle"
        style={{
          backgroundColor: '#ffa500',
          borderRadius: '50%',
          borderColor: '#fd810c',
        }}
        onClick={handleShow}
      >
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faPencilAlt} />
        </span>
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '20rem' }}>
          <Form onSubmit={handleSubmit}>
            <FormControl
              name="title"
              placeholder="Title"
              value={post.title}
              onChange={handleChange}
            />
            <FormControl
              style={{ height: '10rem' }}
              as="textarea"
              rows="10"
              cols="50"
              name="description"
              placeholder="Description"
              value={post.description}
              onChange={handleChange}
            />
            <Button type="submit" style={{ marginTop: '10px' }}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
