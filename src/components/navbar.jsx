import React from "react";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <i class="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary">
            {props.totalCounters}
          </span>
        </i>
      </div>
    </nav>
  );
};

export default NavBar;
