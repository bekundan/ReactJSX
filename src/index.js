import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>Hola Amigos! </h1>
  </div>,
  document.getElementById("root")
);

ReactDom.render(
  <div>
    {" "}
    <h1>My Favourite Food </h1>
    <ul>
      <li>Kiwi</li>
      <li>Noodles</li>
      <li>Coco</li>
    </ul>
  </div>,
  document.getElementById("main")
);
