import React from "react";

const Country = ({
  textProperty,
  valueProperty,
  items,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "list-group-item bg-warning"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Country.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Country;
