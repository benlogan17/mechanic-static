import { Container, Row, Image } from "react-bootstrap"

export const ImageWithTextBelow = ({content, alt, id}) => {
    return (
        <Container className={`w-75 m-auto tile-custom p-3`}>
            <Row>
                <img
                    alt={alt}
                    className="col-lg-5 m-auto"
                    id={"image-home-" + id}
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