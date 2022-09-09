import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetNameDogs } from "../../actions";
import style from "../SearchBar/SearchBar.module.css";
import Swal from "sweetalert2";

export default function SearchBar() {
  const [dog, setDog] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const Dog = useSelector((state) => state.dogs);

  function handleInputChange(e) {
    e.preventDefault();
    setDog(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (dog) {
      if (e.key === "Enter" || e.type === "click") {
        dispatch(GetNameDogs(dog));
       
      }
    } else {
      setMsg("Please write a name");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Write a Name",
      });
    }
  }

  return (
    <div className={style.Container}>
      <div className={style.searchBar}>
        <div>
          <input
            className={style.input}
            value={dog}
            type="text"
            placeholder="Example: Husky"
            onChange={(e) => handleInputChange(e)}
            onKeyUp={(e) => handleSearch(e)}
            onke
          />
        </div>
        <div>
          <button className={style.submit} onClick={(e) => handleSearch(e)}>Search</button>
        </div>
      </div>
    </div>
  );
}
