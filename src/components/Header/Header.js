import React from "react";

function Header({ name }) {
  return (
    <div className="header">
      <h1 className="card badge">{name} </h1>
    </div>
  );
}

export default Header;
