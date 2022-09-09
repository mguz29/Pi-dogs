// import { useEffect, useState } from "react";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { GetDogs, GetTemp, OrderByName, OrderByWeith } from "../../../actions";
// import { Link } from "react-router-dom";

// export default function Filters({ setOrden }) {
//   const dispatch = useDispatch();
//   // const temperamets = useSelector((state) => state.temp);
//   const names = useSelector((state) => state.dogs);

//   function handleSort(e) {
//     e.preventDefault();
//     if (e.target.value !== "All") {
//       dispatch(OrderByName(e.target.value));
//       setOrden(`Ordenado ${e.target.value}`);
//     } else {
//       dispatch(GetDogs());
//       setOrden(e.target.value);
//     }
//   }

//   function handleSortWeith(e) {
//     e.preventDefault();
//     if (e.target.value !== "All") {
//       dispatch(OrderByWeith(e.target.value));
//       setOrden(`Ordenado ${e.target.value}`);
//     } else {
//       dispatch(GetDogs());
//       setOrden(e.target.value);
//     }
//   }
//   useEffect(() => {
//     dispatch(GetTemp());
//     dispatch(GetDogs());
//   }, []);

//   // function handleTempera(e) {
//   //   console.log(e.target.value);
//   //   dispatch(filterByTemp(e.target.value));
//   // }

//   function handleClick(e) {
//     e.preventDefault();
//     window.location.reload();
//   }
//   return (
//     <div className="Select">
//       <div className="f">

//       <div className="crearPerro">
//         <Link to="/dog" className="crearperro">
//           Crear Perro
//         </Link>
//       </div>

//       <div>
//         <button
//           className="refresh"
//           onClick={(e) => {
//             handleClick(e);
//           }}
//         >
//           Refresh
//         </button>
//       </div>

//       <div>
//         <select className="ordenNombre" onChange={(e) => handleSort(e)}>
//           <option hidden>Ordenar por Nombre</option>
//           <option value="All">All</option>
//           <option value="asc">Ascendente</option>
//           <option value="desc">Descendente</option>
//         </select>
//       </div>

//       <div>
//         <select className="ordenPeso" onChange={(e)=> handleSortWeith(e)}>
//           <option hidden>Ordenar por Peso</option>
//           <option value="All">All</option>
//           <option value="asc">Ascendente</option>
//           <option value="desc">Descendente</option>
//         </select>
//       </div>
//       {/* <div>
//       <select className="ordenPeso">
//         <option hidden>Filter By Race</option>
//         <option>All</option>
//         {names.map((dog) => (
//           <option value={dog.nombre}>{dog.nombre}</option>
//         ))}
//       </select>
//     </div> */}
//       {/* <div>
//     <select className="ordenPeso" onChange={e=>handleTempera(e)}>

//       {temperamets.map((temp) => (
//         <option value={temp.nombre}>{temp.nombre}</option>
//       ))}
//     </select>
//   </div> */}
//       </div>
//     </div>
//   );
// }
