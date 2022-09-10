import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetDogs, GetTemp, OrderByName, OrderByWeith, setPage } from "../../../actions";
import huella from '../../../Imagenes/huella.png'
import hogar from '../../../Imagenes/hogar.png'
import style from '../NavBar2/NavBar2.module.css'

function NavDetail({ setOrden }) {
  const dispatch = useDispatch();
  // const temperamets = useSelector((state) => state.temp);
  const names = useSelector((state) => state.dogs);


  function handleSortWeith(e) {
    e.preventDefault();
    if (e.target.value !== "All") {
      dispatch(OrderByWeith(e.target.value));
      setOrden(`Ordenado ${e.target.value}`);
      dispatch(setPage(1))
    } else {
      dispatch(GetDogs());
      setOrden(e.target.value);
    }
  }
  useEffect(() => {
    dispatch(GetTemp());
    dispatch(GetDogs());
  }, []);

  // function handleTempera(e) {
  //   console.log(e.target.value);
  //   dispatch(filterByTemp(e.target.value));
  // }

  function handleClick(e) {
    e.preventDefault();
    window.location.reload();
  }
  return (
    <Navbar className="NAVSs" expand="lg">
      <Container fluid>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width: '100%' }}
            navbarScroll
          >
            <div className={style.NavbarDe}>

              <Nav.Link >
                <div className="crearPerro">
                  <Link to="/Dog" className="crearperro">
                    Crear Perro
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <img src={huella} className={style.huellas} />
                </div>
              </Nav.Link>

              <Nav.Link>
                <div>
                <Link to="/Home" className="crearperro">
                  <img src={hogar} className={style.huellas} />
                </Link>
                </div>
              </Nav.Link>

              <Nav.Link >
                <div className="crearPerro">
                  <Link to="/Dog" className="crearperro">
                    Delete
                  </Link>
                </div>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavDetail