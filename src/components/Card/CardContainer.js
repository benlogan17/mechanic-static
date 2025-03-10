import { Card, Button } from "react-bootstrap"
import { auth } from "../../utils/firebase.utils"

export const CardContainer = ({title, body, id}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" id={"parts-" + id} alt={body}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {body}
            </Card.Text>
            {
                auth.currentUser !== null ? <Button variant="warning">Delete Part</Button> : <></>
            }
        </Card.Body>
        </Card>
    )
}