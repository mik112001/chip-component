import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import ChipComponent from "../component/ChipComponent";
import './css/dashboard.css';
import '../component/css/chipComponent.css';

const DashBoard = () => {
  console.log("Dashboard");
  const [search,setSearch] = useState("");
  const [list,setList] = useState([]);
  const names = ["Amit","Basketball","Cat","Dog"];
  const [selectedList,setSelectedList] = useState([]);

  useEffect(() => {
    setList(names.map((name, index) => ({ key: index, name })));
  }, []);

  const handleDelete = (itemToDelete) => {
     console.log(itemToDelete);
     setList((prevList) => prevList.filter((data) => data.name !== itemToDelete.name));
     setSelectedList((prevSelectedList) => [...prevSelectedList,itemToDelete]);
  };

  const handleSelectedDelete = (data) => {
    setSelectedList((prevSelectedList) => prevSelectedList.filter((item) => data.name !== item.name));
    setList((prevList) => [...prevList,data]);
  }

  const handleChip = (data) => {
    setSearch(data);
    handleSelectedDelete(data);
  }
   
  return (
        <div className="container">
            <div className="search-container">
                <div className="chip-component">
                    {selectedList
                    .map((data) => (
                        <li key={data.key} className="list">
                            <ChipComponent name={data.name} onClick = {() => handleChip(data)}/>
                            <span
                            className="delete"
                            onClick={() => {handleSelectedDelete(data)}}
                            > X 
                            </span>
                        </li>
                    ))}
                </div>
                <input 
                type = "text" 
                className = "search-bar" 
                value={search}
                onChange = {(e) => {setSearch(e.target.value)}}
                />
                <hr />
            </div>
            <ul className="chip">
                {list
                    .filter((data) => 
                      data.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((data) => (
                        <li key={data.key} onClick = {() => handleDelete(data)}
                        className="">
                        <ChipComponent name={data.name} />
                        </li>
                ))}
            </ul>
        </div>
    )
};

export default DashBoard;