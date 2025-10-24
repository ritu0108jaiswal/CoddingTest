import React from "react";

function HeaderLink(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {props.name}
      </a>
    </li>
  );
}

export default HeaderLink;
