import card from '../../assets/images/featured-item-01.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = () =>{
    return(
        <>
            <Container className="cards ">
                <Row className='row g-4'>
                    <Col lg={4} md={6} sm={12} className='card h-100 border-0 shadow-sm p-4 text-center feature-card'>
                        <div className='img mb-3'>
                            <img src={card}/>
                        </div>
                        <h5>Modern Strategy</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </Col>

                    <Col lg={4} md={6} sm={12} className='card h-100 border-0 shadow-sm p-4 text-center feature-card'>
                        <div className='img mb-3'>
                            <img src={card}/>
                        </div>
                        <h5>Best Relationship</h5>
                        <p>Contact us immediately if you have a question in mind</p>
                    </Col>

                    <Col  lg={4} md={6} sm={12} className='card h-100 border-0 shadow-sm p-4 text-center feature-card'>
                        <div className='img mb-3'>
                            <img src={card}/>
                        </div>
                        <h5>Ultimate Marketing</h5>
                        <p>You just need to tell your friends about our free templates</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Card