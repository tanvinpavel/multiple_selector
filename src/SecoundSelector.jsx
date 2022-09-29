import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './second.css';


const options = [
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "Strwqerberry ", value: "strawberry", disabled: true },
];


const SecoundSelector = () => {

  const [selected, setSelected] = useState([]);
  return (
    <div>

      <h3>secound selector</h3>
    <h1>Select Fruits</h1>
    <pre>{JSON.stringify(selected)}</pre>
    <MultiSelect
      className="jahid"
      options={options}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
    />
  </div>
  );
};

export default SecoundSelector;

