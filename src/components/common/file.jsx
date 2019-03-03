import React from "react";

const File = ({ name, label, accept }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input required type="file" accept={accept} />
    </div>
  );
};

export default File;
