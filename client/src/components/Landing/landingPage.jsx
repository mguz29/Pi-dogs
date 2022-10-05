import React from "react";
import {Link} from 'react-router-dom'
import style from "./LandingPage.module.css"
import gifsas from "../../Imagenes/perro.gif"
import feliz from "../../Imagenes/feliz.png"

export default function landingPage() {
    return (
        <div className={style.landing}>
            <div className={style.ovalo}>
                  <img className={style.Gif} src={gifsas}/> 
            </div>
            <div className={style.h1Landing}>
            <h1 className={style.tittle}>Pet</h1>
            <h1 className={style.tittle2}>H<img width='90px' src={feliz}/>use</h1>
            <Link to = '/home'>
                 <button>Welcome</button>
            </Link>
            </div>
        </div>
    ) 
}