import { Card, Button } from "react-bootstrap"

export const CardContainer = ({title, body, imageSrc}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {body}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}