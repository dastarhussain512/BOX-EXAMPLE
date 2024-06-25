import { useState } from "react";
import "./Box.css";
import boxs from "./Boxs";
//zaki


  return (
    <>
      <main>
        {squares.map((square) => {
          return (
            <div
              key={square.id}
              className="box"
              onClick={() => toggleSquare(square.id)}
              style={{ backgroundColor: square.on ? "#222222" : "transparent" }}
            ></div>
          );
        })}
      </main>
    </>
  );


export default App;