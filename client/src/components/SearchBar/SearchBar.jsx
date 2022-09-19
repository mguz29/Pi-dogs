import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetNameDogs, setPage } from "../../actions";
import style from "../SearchBar/SearchBar.module.css";
import Swal from "sweetalert2";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [ setMsg] = useState("");
  const dispatch = useDispatch();
  // const Dog = useSelector((state) => state.dogs);

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (search) {
      if (e.key === "Enter" || e.type === "click") {
        dispatch(GetNameDogs(search));
        setSearch("")
        dispatch(setPage(1))
       
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
            value={search}
            type="text"
            placeholder="Example: Husky"
            onChange={(e) => handleInputChange(e)}
            onKeyUp={(e) => handleSearch(e)}
            
          />
        </div>
        <div>
          <button className={style.submit} onClick={(e) => handleSearch(e)}>Search</button>
        </div>
      </div>
    </div>
  );
}
