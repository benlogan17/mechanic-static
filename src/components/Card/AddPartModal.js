import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AddPartModal = ({show, handleClose}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.title
        const description = event.target.description
        const file = event.target.file
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
                    <Form.Control type="file" />
                </Form.Group>
                <Button type="submit" variant="primary">Add Part</Button>
            </Form>
        </Modal.Body>
    </Modal>
    )
}