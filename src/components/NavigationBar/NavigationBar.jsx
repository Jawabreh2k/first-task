import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav>
      <h1>Estarta Blog</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <button>
            <a href="#">New Blogs!</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
