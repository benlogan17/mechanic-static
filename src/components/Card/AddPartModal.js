import { Form, Modal, Button } from 'react-bootstrap';
import { uploadImage, uploadPartDoc } from '../../utils/firebase.utils';
import {getFileName, toCamalCase} from '../../utils/string.utils'
import { useState } from 'react';

export const AddPartModal = ({show, handleClose}) => {
    const [error, setError] = useState("")
    const [image, setImage] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        const title = event.target.title.value
        const description = event.target.description.value
        console.log(image)
        const fileName = toCamalCase(getFileName(image.name))


        uploadImage(image, fileName).then(
        (result)=> {
            console.log(result)
            uploadPartDoc(title, description, fileName).then((result) => {
                handleClose()
            })
        }, 
        (rejected) => {
            setError(rejected)
        })
    
    }

    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Part Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit} className='d-flex flex-column mx-5'>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Part Title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
                <Form.Group controlId="img" className="mb-3">
                    <Form.Label>Image of part</Form.Label>
                    <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                </Form.Group>
                <Button type="submit" variant="primary">Add Part</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>{error}</Modal.Footer>
    </Modal>
    )
}