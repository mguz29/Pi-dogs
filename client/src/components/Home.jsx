import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux'
import {GetDogs} from "../actions/index"
import { Link } from "react-router-dom";
import Card from "./Card"
import Paginado from "./Paginado";
import "./Home.css"


export default function Home () {

    const dispatch = useDispatch()
    const allDogsss = useSelector((state)=> state.dogs)

    //  const [currentPage, setCurrentPage] = useState(1)
    //  const [dogsPerPage, setCharactersPerPage] = useState(8)
    //  const indexOfLastDog = currentPage * dogsPerPage //8
    //  const indexOfFirstDog = indexOfLastDog - dogsPerPage//0
    //  const currentCharacters = allDogsss.slice(indexOfFirstDog,indexOfLastDog)

    //     const paginado = (pageNumber) => {
    //         setCurrentPage(pageNumber)
    //     }

    const [currentPage,setCurrentPage] = useState(1) // estado local, inicia siempre en la pagina uno
    const [dogsPerPage, setVideogamesPerPage] = useState(8) // estado local, me piden 15 videojuegos por pagina
    const indexOfLastDog = currentPage * dogsPerPage // indice del ultimo personaje: pagina actual * cantidad de personajes por pagina / 15
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // indice del primer personaje: indice del ultimo - cantidad de personajes por pagina / 0
    const currentDogs = allDogsss.slice(indexOfFirstDog, indexOfLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(GetDogs())
    },[dispatch])

    function handleClick(e) {
        e.preventDefault()
        dispatch(GetDogs())
    }

    return (
        <div>
             <div>
                {/* <h1>Proyecto Individual Perros</h1> */}
            <div className="filtrosNav "> 
              <div className="crearPerro"><Link to = '/dog' className="crearperro">Crear Perro</Link></div>
              
                <div >
                    <button className="refresh" onClick={e=>{handleClick(e)}}>Refresh</button>
                </div>
              
                <div >
                    <select className="ordenNombre">
                            <option hidden>Ordenar por Nombre</option>
                            <option value='asce'>Ascendente</option>
                            <option value='desce'>Descendente</option>
                        </select>
                    </div>

                    <div >
                    <select className="ordenPeso">
                            <option hidden>Ordenar por Peso</option>
                            <option value='asc'>Ascendente</option>
                            <option value='desc'>Descendente</option>
                        </select>
                </div>
                        
               
        </div>              

                {/* <Paginado dogsPerPage ={dogsPerPage} allDogsss={allDogsss.length} paginado={paginado} /> */}

             <div className="Cards">
                <div className="Cardshijo">
                { currentDogs?.map((el)=>{
                        return (
                            <div className="card">
                                <Link to = {"/home/" + el.id} className="cardhijo">
                                    <Card 
                                     nombre={el.nombre} 
                                     peso={el.peso} 
                                     Temperamento={el.Temperamento} 
                                     imagen={el.imagen}/>
                                 </Link> 
                            </div>
                        )
                    })}
                    </div>
                </div>

                <div>
                 <nav className="paginado"><Paginado
                    dogsPerPage={dogsPerPage}
                    allDogsss={allDogsss.length}
                    paginado={paginado}/>
                 </nav> 
               </div>

                
                
            </div>
        </div>
    )
    
}

