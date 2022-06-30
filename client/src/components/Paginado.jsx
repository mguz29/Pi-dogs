// import React from 'react';

// export default function Paginado(dogsPerPage, allDogsss, paginado) {
//     const pageNumbers = []   
 

//    for (let index = 0; index < Math.ceil(allDogsss/dogsPerPage); index++) {
    
//     pageNumbers.push(index+1)
//     console.log(allDogsss)
    
//    }
//    return(
//     <nav>
//         <ul className="paginado">
//             { pageNumbers && pageNumbers.map(number =>( //  renderizo. si tengo este arreglo, entonces mapealo y devolve por ese arreglo, cada uno de los numeros que me devuelve el paginado
//                 <li className="number" key={number}>
//                 <a onClick={() => paginado(number)}>{number}</a>
//                 </li>
//             ))}
//         </ul>
//     </nav>
// )
        
 
// }

import React from "react";
import "./paginado.css"

export default function Paginado ({dogsPerPage, allDogsss, paginado}){ // declaro mi paginado y me traigo propiedades del componente Home
    const pageNumbers = [] // declaro un arreglo vacio

    for (let i = 1; i < Math.round(allDogsss/dogsPerPage); i++ ){ // cantidad de paginas que tendra mi home - recorro un arreglo en el que tomo el numero entero que obtengo por resultado de dividir todos los personajes * los personajes por pagina
        pageNumbers.push(i) // i+1 para que arranque en 1 y no en cero - pusheo ese numero entero en el arreglo vacio
    }

    return(
        <nav>
            <ul className="paginado">
                { pageNumbers && pageNumbers.map(number =>( //  renderizo. si tengo este arreglo, entonces mapealo y devolve por ese arreglo, cada uno de los numeros que me devuelve el paginado
                    <li className="li_paginado" key={number} >
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}