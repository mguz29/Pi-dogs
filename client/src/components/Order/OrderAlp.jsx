import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { OrderByName, GetDogs } from '../../actions';

export default function OrderAlp() {
    const dispatch = useDispatch();
    const [order, setOrden] = useState("");
    
    function handleSort(e) {
        e.preventDefault();
        if (e.target.value !== "All") {
          dispatch(OrderByName(e.target.value));
          setOrden(`Ordenado ${e.target.value}`);
        } else {
          dispatch(GetDogs());
          setOrden(e.target.value);
        }
      }
  return (
    <div> 
    <select className="ordenNombre" onChange={(e) => handleSort(e)}>
        <option hidden>Ordenar por Nombre</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        <option value="All">All</option>
  </select>
  </div>
  )
}
