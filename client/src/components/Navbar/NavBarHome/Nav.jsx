import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetDogs, GetTemp, OrderByName, OrderByWeith, setPage } from "../../../actions/index";

import Filters from '../../Home/Filters/Filters';
import SearchBar from '../../SearchBar/SearchBar';

function NavScrollExample({ setOrden }) {
  const dispatch = useDispatch();
  // const temperamets = useSelector((state) => state.temp);
  const names = useSelector((state) => state.dogs);

  function handleSort(e) {
    e.preventDefault();
    if (e.target.value !== "All") {
      dispatch(OrderByName(e.target.value));
      setOrden(`Ordenado ${e.target.value}`);
      dispatch(setPage(1))
    } else {
      dispatch(GetDogs());
      setOrden(e.target.value);
    }
  }

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
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
            <div className="crearPerro">
        <Link to="/Dog" className="crearperro">
          Create Pet
        </Link>
      </div>
            </Nav.Link>
            <Nav.Link ><div>
        <select className="ordenNombre" onChange={(e) => handleSort(e)}>
          <option hidden style={{fontWeight:'bold'}}>Order by name</option>
          <option value="All">All</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div></Nav.Link>

      <Nav.Link>
        <div>
        <select className="ordenPeso" onChange={(e)=> handleSortWeith(e)}>
          <option hidden>Order by weight</option>
          <option value="All">All</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Less</option>
        </select>
      </div>
      </Nav.Link>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
          <Form className="d-flex">
           <SearchBar/>
          </Form>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;