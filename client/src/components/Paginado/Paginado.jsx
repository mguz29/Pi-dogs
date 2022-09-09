// import React from 'react';

// export default function Paginado(dogsPerPage, allDogsss, paginado) {
//     const pageNumbers = []   
 

//    for (let index = 0; index < Math.ceil(allDogsss/dogsPerPage); index++) {
    
// //     pageNumbers.push(index+1)
// //     console.log(allDogsss)
    
// //    }
// //    return(
// //     <nav>
// //         <ul className="paginado">
// //             { pageNumbers && pageNumbers.map(number =>( //  renderizo. si tengo este arreglo, entonces mapealo y devolve por ese arreglo, cada uno de los numeros que me devuelve el paginado
// //                 <li className="number" key={number}>
// //                 <a onClick={() => paginado(number)}>{number}</a>
// //                 </li>
// //             ))}
// //         </ul>
// //     </nav>
// // )
        
 
// // }

// import React from "react";
// import "./paginado.css"

// export default function Paginado ({dogsPerPage, allDogsss, paginado}){ // declaro mi paginado y me traigo propiedades del componente Home
//     const pageNumbers = [] // declaro un arreglo vacio

//     for (let i = 1; i <= Math.ceil(allDogsss/dogsPerPage); i++ ){ // cantidad de paginas que tendra mi home - recorro un arreglo en el que tomo el numero entero que obtengo por resultado de dividir todos los personajes * los personajes por pagina
//         pageNumbers.push(i) // i+1 para que arranque en 1 y no en cero - pusheo ese numero entero en el arreglo vacio
//     }

//     return(
//         <nav>
//             <ul className="paginado">
//                 { pageNumbers && pageNumbers.map(number =>( //  renderizo. si tengo este arreglo, entonces mapealo y devolve por ese arreglo, cada uno de los numeros que me devuelve el paginado
//                     <li className="li_paginado" key={number} >
//                     <a onClick={() => paginado(number)}>{number}</a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

import React from "react";
import styles from "../Paginado/paginado.module.css";

export default function Paginado({
  page,
  paginate,
  limitPage,
  pageControl,
  firstPrevControl,
  nextLastControl,
}) {
  let pages = {
    prepre: 0,
    pre: 0,
    page: page,
    next: 0,
    nextnext: 0,
  };

  // if (page - 2 < 0) {
  //   pages.prepre = 0;
  // } else {
  //   pages.prepre = page - 2;
  // }
  if (page - 1 < 0) {
    pages.pre = 0;
  } else {
    pages.pre = page - 1;
  }
  if (page + 1 > limitPage) {
    pages.next = 0;
  } else {
    pages.next = page + 1;
  }
  // if (page + 2 > limitPage) {
  //   pages.nextnext = 0;
  // } else {
  //   pages.nextnext = page + 2;
  // }

  let numerPages = [ pages.pre, page, pages.next];

  return (
    <div className={styles.containerPag}>
      <ul>
        <button
          disabled={firstPrevControl}
          className={firstPrevControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, 1)}
          name="first"
        >
          First
        </button>
        <button
          disabled={firstPrevControl}
          className={firstPrevControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, "prev")}
          name="previous"
        >
          {"<<"}
        </button>
      </ul>
      <div className={styles.paginate}>
        <ul>
          {numerPages.map((n) => {
            if (n > 0) {
              return (
                <li
                  className={n === page ? styles.currentPage : ""}
                  key={n}
                  onClick={(e) => paginate(e, n)}
                  id={n}
                >
                  <h5>{n}</h5>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <ul>
        <button
          disabled={nextLastControl}
          className={nextLastControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, "next")}
          name="next"
        >
          {">>"}
        </button>
        <button
          disabled={nextLastControl}
          className={nextLastControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, limitPage)}
          name="last"
        >
          Last
        </button>
      </ul>
    </div>
  );
}