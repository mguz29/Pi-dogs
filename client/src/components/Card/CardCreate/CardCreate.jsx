import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//
import { Link } from "react-router-dom";
import Hearth from "../../../Imagenes/Temp.png";
import bascula from "../../../Imagenes/bascula.png";
import regla from "../../../Imagenes/gobernante.png";
import enojado from "../../../Imagenes/enojado.png";
import style from './CardCreate.module.css'

function CardCreate({
  criado_para,
  nombre,
  peso_max,
  peso_min,
  imagen,
  temperamento,
  altura_min,
  altura_max,
  AñosDeVida_min,
  AñosDeVida_max,
  id
}) {
  return (

    <Card style={{ width: "21rem", height: "29rem" }}>
      {imagen ? (
          <Card.Img
            style={{ height: "180px" }}
            variant="top"
            src={imagen ? imagen : "Loading"}
            alt="img not found"
          />
      ) : (
        <h3>Image Not Found</h3>
      )}
      <Card.Body>
        <Card.Title className={style.Nombre}><h1>{nombre}</h1></Card.Title>

        <div
         className={style.divCo}
        >
          {/* <Card.Img   style={{ width: "30px", marginRight: "8px" }} src={bascula} /> */}
          <Card.Text className={style.text}>
         {criado_para}
          </Card.Text>

        </div>
        <div
         className={style.divCo}
        >
          <Card.Img   style={{ width: "30px", marginRight: "8px" }} src={bascula} />
          <Card.Text className={style.deta}>
          <span className={style.text}>Weight:</span> {peso_min ? peso_min : 'Not Found'} - {peso_max ? peso_max : 'Not Found'} Kg
          </Card.Text>

        </div>
        <div
         className={style.divCo}
        >
           <Card.Img   style={{ width: "30px", marginRight: "8px" }} src={regla} />
        <Card.Text className={style.deta}>
          <span className={style.text}>Height:</span> {altura_min ? altura_min : 'Not Found'} - {altura_max ? altura_max : 'Not Found'} Cm
          </Card.Text >
          </div>

          <div
         className={style.divCo}
        >
           <Card.Img   style={{ width: "30px", marginRight: "8px" }} src={Hearth} />
        <Card.Text className={style.deta}>
         <span className={style.text}>Life:</span>  {AñosDeVida_min ? AñosDeVida_min : 'Not Found'} - {AñosDeVida_max ? AñosDeVida_max : 'Not Found'} Years
          </Card.Text>
          </div>

        <div className={style.divCo}>
        <Card.Img src={enojado} style={{ width: "30px", marginRight: "8px" }}/>
        <Card.Text className={style.deta}>
          { temperamento.map((e, i) => {
                  return <span> {e}, </span>;
              })
            }
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
    
  );
}

export default CardCreate;
