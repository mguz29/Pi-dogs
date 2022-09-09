import React from "react";
import { useState} from "react";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Home/Cards/Cards";
// import NavBar from "../Navbar/navBar";
import NavScrollExample from "../Navbar/Nav";

export default function Home() {
  const [order, setOrden] = useState("");
  return (
    <div className="Container">
      <div>
       <NavScrollExample setOrden={setOrden}/>
      </div>
     <Cards/>
    </div>
  );
}
