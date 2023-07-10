// write a function thats return a react component who recieve some array of items to generate a dropdown menu and could be called itself to render a dropdown into a dropdown component?
import React from "react";

const Dropdown = ({ items, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={value}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
