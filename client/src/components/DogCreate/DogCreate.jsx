import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from './DogCreate.module.css'
import { GetTemp, postDogs } from '../../actions';
import CardCreate from '../Card/CardCreate/CardCreate';
import NavDetail from '../Navbar/NavBar2/navBar';
import Swal from 'sweetalert2';

export default function DogCreate() {
    const dispatch = useDispatch()
    const Types = useSelector((state) => state.temp)
    const history = useHistory()
    const pokemonsAll = useSelector((state) => state.dogs).map(e => e.name);
    console.log(Types)

    const [input, setInput] = useState({
            nombre: "",
            altura_min: 0,
            altura_max: 0,
            peso_min:0,
            AñosDeVida_max:0,
            AñosDeVida_min:0,
            criado_para:"",
            peso_max:0,
            imagen:'' || "https://www.gifss.com/animales/perros/images/perro-animado-12.gif",
            temperamento: [],

    })

    const [errors, setErrors] = useState({});
    // creamos un estado local de mensajes
    const [msg, setMsg] = useState("");


    const validate = (input) => {
        let errors = {};

        if (pokemonsAll.includes(input.nombre.toLowerCase())) {
            errors.nombre = "The pokemon already exists, use another name";
        }

        if (!input.nombre) {
            errors.nombre = "A name is required";
        } else if (!/^[a-zA-Z]+$/.test(input.nombre) || input.nombre.length > 10) {
            errors.nombre = "Name is invalid";
        }

        if (!input.imagen) {
            errors.imagen = "an image url is required";
        } else if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(input.imagen)
        ) { errors.imagen = "url is invalid"; }

        return errors;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function handleChange(e) {
        setMsg("");
        if (e.target.name === "nombre" || e.target.name === "imagen" || e.target.name === "peso_min" || e.target.name === "peso_max" || e.target.name === "altura_max" || e.target.name === "altura_min" || e.target.name === "AñosDeVida_min" || e.target.name === "AñosDeVida_max" || e.target.name === "criado_para" ) {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            });
        } else {
            setInput({
                ...input,
                [e.target.name]: Number(e.target.value),
            });
        }
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (Object.keys(errors).length === 0 && input.nombre)
            dispatch(postDogs(input))
            Swal.fire({
                icon: 'success',
                title: 'Awesome...',
                text: 'Pet created with success!',
              })    
        setInput({
            nombre: "",
            altura_min: 0,
            altura_max: 0,
            peso_min:0,
            AñosDeVida_max:0,
            AñosDeVida_min:0,
            criado_para:"",
            peso_max:0,
            imagen:"",
            temperamento: [],
        })
        history.push('/Home')

    }


    // function handleSelect2(e) {
    //     setInput({
    //         ...input,
    //         TypeSecond: e.target.value
    //     })
    // }


    function handleSelect(e) {
      if(!input.temperamento.includes(e.target.value) && input.temperamento.length <= 4){
      setInput({
          ...input,
          temperamento: [...input.temperamento, e.target.value],
      });
      }
  }


    useEffect(() => {
        dispatch(GetTemp())
    }, [dispatch])

    return (
        <div className={style.container}>
            <NavDetail/>
            <div className={style.formulario}>

            <div className={style.FormularioT}>
          
                <h1>Create your dog</h1>
                <form onSubmit={e => handleSubmit(e)} className={style.Form}>

                    <div className={style.name}>
                        <div>
                           <label>Name</label> 
                        </div>
                        
                        <input
                            className={style.input}
                            placeholder='Name..'
                            type="text"
                            value={input.nombre}
                            name="nombre"
                            onChange={e => handleChange(e)}
                        />
                        {errors.nombre && <p className="error">{errors.nombre}</p>}
                    </div>

                    <div className={style.name}>
                        <div>
                             <label>Bred For</label>
                        </div>
                       
                        <input
                            className={style.input}
                            type="text"
                            value={input.criado_para}
                            name="criado_para"
                            onChange={e => handleChange(e)}
                        />
                        {errors.criado_para && <p className="error">{errors.criado_para}</p>}
                    </div>

                        <div className={style.altura_min}>
                            <div>
                                <label>Heigth Max</label> 
                            </div>
                           
                            <input
                                className={style.input}
                                min={1}
                                max={100}
                                type="number"
                                value={input.altura_max}
                                name="altura_max"
                                onChange={e => handleChange(e)}
                            />
                            {errors.altura_max && <p className="error">{errors.altura_max}</p>}
                        </div>

                        <div className={style.altura_min}>
                            <div>
                                <label>Heigth Min</label>
                            </div>
                            
                            <input
                                className={style.input}
                                min={1}
                                max={100}
                                type="number"
                                value={input.altura_min}
                                name="altura_min"
                                onChange={e => handleChange(e)}
                            />
                            {errors.altura_min && <p className="error">{errors.altura_min}</p>}
                        </div>


                        <div className={style.altura_min}>
                            <div>
                                  <label>Weigth Max</label> 
                            </div>
                         
                            <input
                                className={style.input}
                                min={1}
                                max={100}
                                type="number"
                                value={input.peso_max}
                                name="peso_max"
                                onChange={e => handleChange(e)}
                            />
                            {errors.peso_max && <p className="error">{errors.peso_max}</p>}
                        </div>

                        <div className={style.altura_min}>
                            <div>
                              <label>Weigth Min</label>   
                            </div>
                            <input
                                className={style.input}
                                min={1}
                                max={100}
                                type="number"
                                value={input.peso_min}
                                name="peso_min"
                                onChange={e => handleChange(e)}
                            />
                            {errors.peso_min && <p className="error">{errors.peso_min}</p>}
                        </div>

                       <div className={style.altura_min}>
                        <div>
                           <label>Life Years Max</label> 
                        </div>
                            
                            <input
                                className={style.input}
                                min={1}
                                max={100}
                                type="number"
                                value={input.AñosDeVida_max}
                                name="AñosDeVida_max"
                                onChange={e => handleChange(e)}
                            />
                            {errors.AñosDeVida_max && <p className="error">{errors.AñosDeVida_max}</p>}
                        </div>


                        <div className={style.altura_min}>
                            <div>
                                <label>Life Years Min</label>
                            </div>
                            
                            <input
                                className={style.input}
                                type="number"
                                min={1}
                                max={100}
                                value={input.AñosDeVida_min}
                                name="AñosDeVida_min"
                                onChange={e => handleChange(e)}
                            />
                            {errors.AñosDeVida_min && <p className="error">{errors.AñosDeVida_min}</p>}
                        </div>

                    <div className={style.imagessss}>
                        <div>
                           <label>Image</label>  
                        </div>
                       
                        <input
                            className={style.input}
                            type="url"
                            value={input.imagen}
                            name="imagen"
                            onChange={e => handleChange(e)}
                        />
                        {errors.imagen && <p className="error">{errors.imagen}</p>}
                    </div>

                    {/* <ul><li> {input.types.map(el=>el+" ,")} </li></ul> */}


                    <div className={style.types}>
                        <div className={style.typeprimary}>
                            <div>

                            <label>Temperaments </label>
                            </div>
                            <select className={style.input} onChange={e=>handleSelect(e)}>
                                <option hidden>Default</option>
                                {Types.map((typ, i) => (
                                    <option key={i} value={typ.nombre}>{typ.nombre}</option>
                                ))}
                            </select>
                        </div>
                        </div>
                     <button className={style.iboton} 
                    type="submit" 
                    // disabled={
                    //     input.name 
                    //         ? true
                    //         : false
                    // }
                    >Create Dog</button> 
                  
                    {msg.length > 0 && ( 
                        <div className="mensaje">
                            <p>{msg}</p>
                            <Link to="/home">Go back to Home</Link>
                        </div>
                    )}
                </form>


                </div>
               
                
                <CardCreate
                key={input.id}
                imagen={input.imagen}
                id={input.id}
                nombre={input.nombre}
                peso_max={input.peso_max}
                peso_min={input.peso_min}
                altura_max={input.altura_max}
                altura_min={input.altura_min}
                temperamento={input.temperamento}
                criado_para={input.criado_para}
                AñosDeVida_min={input.AñosDeVida_min}
                AñosDeVida_max={input.AñosDeVida_max}
              /> 
               

            </div>

        </div>
    )
}