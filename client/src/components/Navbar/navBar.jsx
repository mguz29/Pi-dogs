import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavDetail() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <div className="crearPerro">
                <Link to="/dog" className="crearperro">
                  Home
                </Link>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className="crearPerro">
                <Link to="/dog" className="crearperro">
                  Home
                </Link>
              </div>
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavDetail;
