import React from "react";
import "./card.css"

export default function Card  ({nombre, peso, imagen, Temperamento }){
    return (
        <div >
            <div className="divimagen"><img className="imagen" src={imagen} alt="img not found" width="250px" height="180px" ></img> </div>
            <div className="divnombre"><h2 className="nombre">{nombre}</h2></div>
            <div className="divpeso"><p className="peso">{peso}</p> </div>
            <div className="divtemperamento"><p className="temperamento">{Temperamento}</p></div>
            
            
        </div>
    );
}