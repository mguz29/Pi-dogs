import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//
import { Link } from "react-router-dom";
import Hearth from "../../Imagenes/Temp.png";
import bascula from "../../Imagenes/bascula.png";
import style from './card.module.css'
function CArd({
  criado_para,
  nombre,
  peso_max,
  peso_min,
  imagen,
  temperamento,
  id,
}) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }}>
      {imagen ? (
        <Link to={`/Dogs/${id}`}>
          <Card.Img
            style={{ height: "180px" }}
            variant="top"
            src={imagen ? imagen : "Loading"}
            alt="img not found"
          />
        </Link>
      ) : (
        <h1> Cargbando</h1>
      )}
      <Card.Body>
        <div>

        <Card.Title className={style.tittle}><h4>{nombre.split(' ', 3).join(' ')}</h4></Card.Title>
        <div
         className={style.divCo}
         >
          <Card.Img   style={{ width: "30px", marginRight: "8px" }} src={bascula} />
          <Card.Text>
          Weight: {peso_min ? peso_min : 'Not Found'} - {peso_max ? peso_max : 'Not Found'} KG
          </Card.Text>
        </div>
        <div className={style.divCo}>
        <Card.Img src={Hearth} style={{ width: "30px", marginRight: "8px" }}/>
        <Card.Text>
          {temperamento.length >= 3
            ? temperamento.map((e, i) => {
                if (i < 2) {
                  return <span> {e}, </span>;
                }
              })
              : temperamento }
        </Card.Text>
        </div>

        <Link to={`/Dogs/${id}`}>
          <Button  className={style.buttonInnfo}>Detail</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CArd;
