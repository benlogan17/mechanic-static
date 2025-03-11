import { Modal, Button } from 'react-bootstrap';
export const DeleteWarningModal = ({show, title, onDelete, onHide}) => {
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Are you sure you want to delete the part with title: {title}?</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex d-row justify-content-evenly'>
                <Button className="w-25 button-part" onClick={onDelete}>Yes</Button>
                <Button className="w-25 button-part" onClick={onHide}>No</Button>
            </Modal.Body>
        </Modal>
    )
}