import { Col, Row, Container } from "react-bootstrap"
import { SocialIcon } from 'react-social-icons';

export const SocialIcons = () => {
    return (
        <Container className='container m-auto'>
            <Row className="m-3">
                <Col>
                    <h1 className="text-center">Contact at </h1>
                </Col>
            </Row>
            <Row>
                {
                    ["www.facebook.com", "www.twitter.com", "www.instagram.com"].map((url, index) => 
                        <Col className="text-center" key={`SocialIcon_${index}`}>
                            <SocialIcon url={url}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}