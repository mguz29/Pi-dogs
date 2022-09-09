import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CArd from '../../Card/Card';
import { GetDogs, setPage } from '../../../actions';
import Loading from '../../Loading/Loading';
import Paginado from '../../Paginado/Paginado';
import Footer from '../../Footer/Footer';

export default function Cards() {
    const dispatch = useDispatch();
    const allDogsss = useSelector((state) => state.dogs);
  
    let page = useSelector((state) => state.page);
    const dogsPerPage = 8;
  
    let lastIndex = page * dogsPerPage; //indice incial para metodo slice
    let firstIndex = lastIndex - dogsPerPage; //indice final para metodo slice
    let currentDogs = allDogsss.slice(firstIndex, lastIndex); //metodo slice para determinar del array los libros a mostrar por pagina
  
    const limitPage = Math.ceil(allDogsss.length / dogsPerPage);
  
    let firstPrevControl = false; //control de botones, deshabilita cuando es imposible la ejecución
    let nextLastControl = false;
  
    if (page === 1) firstPrevControl = true; //control de botones, dependiendo la posición, deshabilita el correspondiente
    if (page === limitPage) nextLastControl = true;
  
    // pageControl realiza el control del paginado, recibe la información del evento y renderiza mediante el componente Paginated.
    // setea las páginas segun el botón clickeado.
  
    const paginate = (e, pageNumber) => {
      if (pageNumber === "next" && page + 1 <= limitPage) {
        dispatch(setPage(page + 1));
      } else if (pageNumber === "prev" && page - 1 >= 1) {
        dispatch(setPage(page - 1));
      } else {
        dispatch(setPage(pageNumber));
      }
    };
  
    useEffect(() => {
      dispatch(GetDogs());
    }, [dispatch]);
  
  return (
    <div>

    <div className="Cards">
    <div className="Cardshijo">
      {currentDogs.length > 0 ? (
        currentDogs?.map((el) => {
          return (
            <div className="">
              <CArd
                key={el.id}
                imagen={el.imagen}
                id={el.id}
                nombre={el.nombre}
                peso_max={el.peso_max}
                peso_min={el.peso_min}
                Temperamento={el.Temperamento}
                criado_para={el.criado_para}
              />
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  </div>

  <div className="ConatinerPaginado">
    <div className="paginado">
      <Paginado
        page={page}
        paginate={paginate}
        limitPage={limitPage}
        firstPrevControl={firstPrevControl}
        nextLastControl={nextLastControl}
      />
    </div>
    {/* <div className="Footer">
      <Footer />
    </div> */}
  </div>
    </div>
  )
}
