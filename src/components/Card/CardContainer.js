import { Card, Button } from "react-bootstrap"
import { auth } from "../../utils/firebase.utils"
import "../../styles/item-page.css"

export const CardContainer = ({title, body, id, onDelete}) => {
    return (
        <Card style={{ width: '18rem' }} key={id} className="mx-3 my-2 card-width">
        <Card.Img variant="top" id={"parts-" + id} alt={body}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {body}
            </Card.Text>
            {
                auth.currentUser !== null ? <Button variant="danger" onClick={onDelete}>Delete Part</Button> : <></>
            }
        </Card.Body>
        </Card>
    )
}