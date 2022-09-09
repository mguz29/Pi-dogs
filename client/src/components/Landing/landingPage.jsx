import React from "react";
import {Link} from 'react-router-dom'
import "./LandingPage.css"

export default function landingPage() {
    return (
        <div className="landing">
            <h1 className="titulo">Bienvenidos</h1>
            <Link to = '/home'>
                 <button>Ingresar</button>
            </Link>
        </div>
    ) 
}