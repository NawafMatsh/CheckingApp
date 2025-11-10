"use client";
import { useEffect, useState } from "react";
import PopUpAlret from "../DisplayComponent/page";

export default function SearchBar() {
  const [Data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [TheName, setTheName] = useState("");
    const [TheText, setTheText] = useState("");

    const [DisplayPopUp, setDisplayPopUp] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
    
    function HandleSearchEvent() { 
        const looking = searchInput.trim();

        const found = Data.find((person) => { 
           return person.id == looking
        })
        if (found) { 
            setTheName(found.name)
            setDisplayPopUp(true)
            setTheText("✅أسمك مسجل");
        } else { 
            setTheName("لايوجد");
            setDisplayPopUp(true);
            }
    }
  return (
      <div className="maindiv">
      <form className="form">
        <label>التحقق من تسجيل أسمك</label>
        <input
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          placeholder="بحث بالاسم أو رقم الهوية"
        ></input>
        <button type="button" onClick={HandleSearchEvent}>بحث</button>
      </form>
          <PopUpAlret isVisiable={DisplayPopUp} name={TheName} text={TheText}/>
    </div>
  );
}
