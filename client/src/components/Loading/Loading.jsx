import React from 'react'
import gif from '../../Imagenes/Loading.gif'

export default function Loading() {
  return (
    <div>
        <img src={gif}></img>
        <h2>Loading...</h2>
    </div>
  )
}
