import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from './DogCreate.module.css'
import { GetTemp, postDogs } from '../../actions';

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
            imagen:"",
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
        alert('Personaje Creado')
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
            <nav className={style.nav}>
                <Link to='/home'>
                    <button className={style.navBo}> Volver</button>
                </Link>
            </nav>

            <div className={style.formulario}>
                <h1>Create your dog</h1>

                <form onSubmit={e => handleSubmit(e)}>

                    <div className={style.name}>
                        <label>Name:</label>
                        <input
                            className={style.inputname}
                            type="text"
                            value={input.nombre}
                            name="nombre"
                            onChange={e => handleChange(e)}
                        />
                        {errors.nombre && <p className="error">{errors.nombre}</p>}
                    </div>

                    <div className={style.name}>
                        <label>Bred For:</label>
                        <input
                            className={style.inputname}
                            type="text"
                            value={input.criado_para}
                            name="criado_para"
                            onChange={e => handleChange(e)}
                        />
                        {errors.criado_para && <p className="error">{errors.criado_para}</p>}
                    </div>


                    <div className={style.alturapeso}>
                        <div className={style.altura_min}>
                            <label>Heigth Max:</label>
                            <input
                                className={style.inputheight}
                                type="number"
                                value={input.altura_max}
                                name="altura_max"
                                onChange={e => handleChange(e)}
                            />
                            {errors.altura_max && <p className="error">{errors.altura_max}</p>}
                        </div>




                        <div className={style.altura_min}>
                            <label>Heigth Min:</label>
                            <input
                                className={style.inputheight}
                                type="number"
                                value={input.altura_min}
                                name="altura_min"
                                onChange={e => handleChange(e)}
                            />
                            {errors.altura_min && <p className="error">{errors.altura_min}</p>}
                        </div>


                        <div className={style.altura_min}>
                            <label>Weigth Max:</label>
                            <input
                                className={style.inputheight}
                                type="number"
                                value={input.peso_max}
                                name="peso_max"
                                onChange={e => handleChange(e)}
                            />
                            {errors.peso_max && <p className="error">{errors.peso_max}</p>}
                        </div>



                        <div className={style.altura_min}>
                            <label>Weigth Min:</label>
                            <input
                                className={style.inputheight}
                                type="number"
                                value={input.peso_min}
                                name="peso_min"
                                onChange={e => handleChange(e)}
                            />
                            {errors.peso_min && <p className="error">{errors.peso_min}</p>}
                        </div>

                        {/* <div className={style.attack}>
                            <label>Attack:</label>
                            <input
                                type="range"
                                value={input.attack}
                                name="attack"
                                min={5}
                                max={210}
                                onChange={e => handleChange(e)}
                            />
                            {input.attack}
                        </div> */}
                       <div className={style.altura_min}>
                            <label>Life Years Max:</label>
                            <input
                                className={style.inputheight}
                                type="number"
                                value={input.AñosDeVida_max}
                                name="AñosDeVida_max"
                                onChange={e => handleChange(e)}
                            />
                            {errors.AñosDeVida_max && <p className="error">{errors.AñosDeVida_max}</p>}
                        </div>


                        <div className={style.altura_min}>
                            <label>Life Years Min:</label>
                            <input
                                className={style.inputheight}
                                type="number"
                                value={input.AñosDeVida_min}
                                name="AñosDeVida_min"
                                onChange={e => handleChange(e)}
                            />
                            {errors.AñosDeVida_min && <p className="error">{errors.AñosDeVida_min}</p>}
                        </div>



                    </div>

                    <div className={style.types}>
                        <div className={style.typeprimary}>
                            <label>TypePrimary: </label>
                            <select className={style.inputTypePrimary} onChange={e=>handleSelect(e)}>
                                <option hidden>Temperaments</option>
                                {Types.map((typ, i) => (
                                    <option key={i} value={typ.nombre}>{typ.nombre}</option>
                                ))}
                            </select>
                        </div>
                        </div>



                    <div className={style.imagessss}>
                        <label>Image:</label>
                        <input
                            className={style.inputTypePrimary}
                            type="text"
                            value={input.imagen}
                            name="imagen"
                            onChange={e => handleChange(e)}
                        />
                        {errors.imagen && <p className="error">{errors.imagen}</p>}
                    </div>

                    {/* <ul><li> {input.types.map(el=>el+" ,")} </li></ul> */}

                     <button className={style.iboton} 
                    type="submit" 
                    disabled={
                        input.name 
                            ? true
                            : false
                    }
                    >Crear Pokemon</button> 
                  
                    {msg.length > 0 && ( 
                        <div className="mensaje">
                            <p>{msg}</p>
                            <Link to="/home">Go back to Home</Link>
                        </div>
                    )}

                </form>

                <div style={{backgroundColor:'blue'}}>
                  <div>
                  <span><img src={input.imagen} style={{width:'300px'}}/></span>
                  </div>
                  <span>Nombre: {input.nombre}</span>
                  <div>
                  <span>Altura:{input.altura_max} - {input.altura_min} Cm</span>
                  </div>
                  <div>
                  <span>Peso:{input.peso_min} - {input.peso_max} Kg</span>
                  </div>
                  <div>
                  <span>Años de vida:{input. AñosDeVida_min} - {input.AñosDeVida_max} Years</span>
                  </div>
                  

                  <div>
                  <span>criado para:{input.criado_para}</span>
                  </div>
                  <div>
                  <span>Temperaments: {input.temperamento?.map(e=>{
                    return(
                      <span>{e},</span>
                    )
                  })}</span>
                  </div>
                </div>
            </div>

        </div>
    )
}