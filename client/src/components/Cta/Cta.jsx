import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  const handleCopy = () => {
    const sign = document.querySelector(".sign__result").outerHTML;
    const temp = document.createElement("div");
    temp.innerHTML = sign;
    document.body.appendChild(temp);
    const range = document.createRange();
    range.selectNodeContents(temp);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(temp);
  };

  return (
    <div className="cta">
      <Link to={"/steps"}>
        {" "}
        <button className="btn__primary" onClick={handleCopy}>Crear firma</button>
      </Link>
    </div>
  );
};

export default Cta;
