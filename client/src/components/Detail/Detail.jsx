import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { GetDogsId, SetDogDetail} from '../../actions';
import Loading from '../Loading/Loading';
import Nav from '../Navbar/Nav';


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const dog = useSelector(state=>state.detail)
    console.log(dog)


    useEffect(() => {
        dispatch(GetDogsId(id))
        return () => {
           dispatch(SetDogDetail())
          }
    }, [dispatch])
    
  return (
    <div>
      <Nav/>
         <nav className='nav'>
        < Link to='/Home'>
          <button className='Button'>Volver</button>
        </Link>
        {/* <Link to='/Home'>
          <img src={dog[0].imagen} className="images" />
        </Link> */}

        {/* <img className='imagess' src={dog.length ? dog[0].imagen : 'Cargando'} /> */}
      </nav>

        {
            dog.length> 0 ?
            <div>
            <div><img src={dog[0].imagen} width='300px'/> </div>
            <div>
                <h1>{dog[0].nombre}</h1>
                <h1>{dog[0].altura}</h1>
                <h1>Peso : {dog[0].peso_min} - {dog[0].peso_max} Kg</h1>
                <h1>Altura : {dog[0].altura_min} - {dog[0].altura_max} Cm</h1>
                <h1>Esperanza de vida: {dog[0].añosDeVida}</h1>
                <h1>Temperamentos : {dog[0].Temperamento.toString()}</h1>
            </div>
            </div>

            :<Loading/>
        }
    </div>
  )
}
