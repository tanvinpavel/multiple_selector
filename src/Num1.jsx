import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
// import "./num1.css"

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];


const Num1 = () => {
  const [selected, setSelected] = useState([]);

  useEffect(()=>{
    if(Num1){
      import("./num1.css")
    }else{
      import("./second.css")
    }
  },[])
  return (
    <div>
    <h1>Select Fruits</h1>
    <pre>{JSON.stringify(selected)}</pre>
    <MultiSelect
      className="pavel"
      options={options}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
    />
  </div>
  );
};

export default Num1;