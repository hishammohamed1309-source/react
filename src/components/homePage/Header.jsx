import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'

const Header = () => (
    <>
        <Navbar className='navbar' expand="lg" bg="light" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className='links ms-auto'>
                        <Nav.Link href="#welcome">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#work">Work Process</Nav.Link>
                        <Nav.Link href="#testi">Testimonials</Nav.Link>
                        <Nav.Link href="#price">Pricing Tables</Nav.Link>
                        <Nav.Link href="#blog">Blog Entries</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)

export default Header