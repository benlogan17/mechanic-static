import { Container, Row } from "react-bootstrap"

export const ImageWithTextBelow = ({content, image_url, alt}) => {
    return (
        <Container className={`w-75 m-auto tile-custom p-3`}>
            <Row>
                <img 
                    src={image_url}
                    alt={alt}
                    className="col-lg-5 m-auto"
                />
            </Row>
            <Row>
                <p 
                    className='mt-3 p-3 w-100 text-center m-auto bg-white fs-5'
                >
                    {content}
                </p>
            </Row>
        </Container>
    )
}