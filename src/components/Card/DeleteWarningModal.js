import { Modal, Button } from 'react-bootstrap';
export const DeleteWarningModal = ({show, title, onDelete, onHide}) => {
    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete the part with title: {title}?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button onClick={onDelete}>Yes</Button>
                <Button onClick={onHide}>No</Button>
            </Modal.Body>
        </Modal>
    )
}