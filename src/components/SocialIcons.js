import { Col, Row, Container } from "react-bootstrap"
import { SocialIcon } from 'react-social-icons';

export const SocialIcons = () => {
    return (
        <Container className='container m-auto'>
            <Row className="m-3">
                <Col>
                    <h1 className="text-center">Contact</h1>
                </Col>
            </Row>
            <Row className="mb-5">
                {
                    ["https://www.facebook.com/farmmachinerypartsni"].map((url, index) => 
                        <Col className="text-center" key={`SocialIcon_${index}`}>
                            <SocialIcon url={url}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}