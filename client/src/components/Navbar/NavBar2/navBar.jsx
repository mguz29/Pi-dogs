import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { DeleteDog } from "../../../actions";
import style from '../NavBar2/NavBar2.module.css'
import Swal from 'sweetalert2';


function NavDetail({id}) {
  const dispatch = useDispatch();
  const history = useHistory()

    function handleDelete (e) {
      e.preventDefault()
    console.log(id)

    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your Pet has been deleted.',
          'success'
        )
        dispatch(DeleteDog(id))
        history.push('/Home')
      }
    })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You cannot remove dogs from the API',
      })
    }
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
              {/* <Nav.Link>
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
              </Nav.Link> */}

              <Nav.Link >
                <div>   
                <button className="crearPerro" onClick={e=>handleDelete(e)}>
                    Delete
                </button>  
                  
                </div>
              </Nav.Link>

              <Nav.Link >
                <div>   
                  <Link to='/Home'>
                <button className="crearPerro">
                    Return
                </button>  
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