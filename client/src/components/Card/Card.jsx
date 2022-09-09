// import React from "react";
// import "./card.css";
// import { Link } from "react-router-dom";

// export default function Card({
//   nombre,
//   peso_max,
//   peso_min,
//   imagen,
//   Temperamento,
//   id,
// }) {
//   console.log(Temperamento);
//   return (
//     <div className="cards">
//       <div className="face front">
//         {imagen ? (
//           <Link to={`/Dogs/${id}`}>
//             <div className="divimagen">
//               <img
//                 className="imagen"
//                 src={imagen ? imagen : "Loading"}
//                 alt="img not found"
//                 // width="250px"
//                 // height="180px"
//               ></img>{" "}
//             </div>
//           </Link>
//         ) : (
//           <h1> CArgbando</h1>
//         )}

//         <div className="divnombre">
//           <h2 className="nombre">{nombre}</h2>
//         </div>
//       </div>

//       <div className="face back">
//         <div className="divpeso">
//           <p className="peso">
//             Peso: {peso_min} - {peso_max} Kg
//           </p>{" "}
//         </div>
//         <div className="divtemperamento">
//           <p className="temperamento">
//             {Temperamento.length >= 3
//               ? Temperamento.map((e, i) => {
//                   if (i < 3) {
//                     return <span>{e}, </span>;
//                   }
//                 })
//               : Temperamento}
//           </p>
//         </div>
//       </div>
//     </div>

//   );
// }


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//
import { Link } from "react-router-dom";
import perro from '../../Imagenes/perro.png'
function CArd({
  criado_para,
  nombre,
  peso_max,
  peso_min,
  imagen,
  Temperamento,
  id,
}) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }}>
      {imagen ? (
        <Link to={`/Dogs/${id}`}>
          <Card.Img
            style={{height:'180px'}}
            variant="top"
            src={imagen ? imagen : "Loading"}
            alt="img not found"
          />
        </Link>
      ) : (<h1> Cargbando</h1>)}
      <Card.Body>
        <Card.Title style={{fontSize:'1.4rem'}}>{nombre}</Card.Title>
        <Card.Text>
          {criado_para ? criado_para.split(',', 3).join('') : 'Not Found'}
        </Card.Text>
       
        <Card.Text> Temp:
        { Temperamento.length >= 3
              ? Temperamento.map((e, i) => {
                  if (i < 3) {
                    return <span> {e}, </span>;
                  }
                })
              : Temperamento}
        </Card.Text>

       
        <Link to={`/Dogs/${id}`}>
          <Button style={{color:'black', border:'solid black 1px'}} variant="outline-light">Detalle</Button>
        </Link>
        
      </Card.Body>
    </Card>
  );
}

export default CArd;