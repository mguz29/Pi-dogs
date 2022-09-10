import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { GetDogsId, SetDogDetail} from '../../actions';
import Loading from '../Loading/Loading';
import NavDetail from '../Navbar/NavBar2/navBar';
import style from './Detail.module.css'
import Hearth from "../../Imagenes/Temp.png";
import bascula from "../../Imagenes/bascula.png";
import regla from "../../Imagenes/gobernante.png";
import enojado from "../../Imagenes/enojado.png";
import perro from "../../Imagenes/perro.png";


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
    <div className={style.DetailContainer}>
      <div>
        <NavDetail/>
      </div>
      
         {/* <nav className='nav'>
         <Link to='/Home'>
          <img src={dog[0]?.imagen} className="images" />
        </Link> 

         <img className='imagess' src={dog.length ? dog[0].imagen : 'Cargando'} /> 
      </nav> */}

      <div className={style.bodyDetail}>

        {
            dog.length> 0 ?
            <div className={style.ContainerDetail}>
            <div className={style.ImgContainer}><img src={dog[0].imagen} className={style.image} /> </div>
            <div className={style.data}>

                <h1 style={{fontWeight: 'bold'}}>{dog[0].nombre}</h1>
            <div className={style.textDetail}>

                <div className={style.containerInfo}>
                <img className={style.pin} src={bascula}/>
                <h5>
                  <span style={{fontWeight: 'bold'}}>Weight: </span>
                  {dog[0].peso_min} - {dog[0].peso_max} Kg
                </h5>
                </div>

                <div className={style.containerInfo}>
                <img className={style.pin}src={regla}/>
                  <h5> <span style={{fontWeight: 'bold'}}>Height: </span>
                    {dog[0].altura_min} - {dog[0].altura_max} Cm
                  </h5>
                </div>

                <div className={style.containerInfo}>
                <img className={style.pin} src={Hearth}/>
                <h5><span style={{fontWeight: 'bold'}}>Life: </span>
                   {dog[0].añosDeVida} Years</h5>
                </div>

                <div className={style.containerInfo}>
                <img className={style.pin} src={perro}/>
                  <h5><span style={{fontWeight: 'bold'}}>Bred for: </span> {dog[0].criado_para}</h5>
                </div>

                <div className={style.containerInfo}>
                <img className={style.pin} src={enojado}/>
                  <h5 style={{width:'75%'}}><span style={{fontWeight: 'bold'}}>Temperament: </span> {dog[0].temperamento? dog[0].temperamento.join(', ') : 'Not Found'}</h5>
                </div>
            </div>
            </div>
            </div>
            :<Loading/>
        }
      </div>
    </div>
  )
}
