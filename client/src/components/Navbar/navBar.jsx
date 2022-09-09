import React from 'react'
import Filters from '../Home/Filters/Filters'
import SearchBar from '../SearchBar/SearchBar'
import './navBar.css'
export default function NavBar({setOrden}) {
  return (
    <div className='NavbarCo'>
        <div>
            <Filters setOrden={setOrden}/>
        </div>
        <div><SearchBar/></div>
        
        
    </div>
  )
}
