import React, { useState } from 'react'
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const CreatePost = () => {
  const [showModal, setShowModal] = useState(false)
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // code to save the new post to your backend
    setPost({ title: '', body: '' })
    handleClose()
  }

  return (
    <>
      <Button
        variant="primary"
        className="btn-circle"
        style={{
          backgroundColor: '#ffa500',
          margin: '2rem 0 0 30rem',
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
