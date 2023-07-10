import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import SignContainer from "../components/SignContainer/SignContainer";
import Cta from "../components/Cta/Cta";

const Sign = () => {
  return (
    <div className="sign">
      <div className="error">
        Ups. Parece que la resolución de tu dispositivo no es compatible con
        nuestra herramienta
      </div>
      <Header />
      <div className="sign__wrapper">
        <Form />
        <SignContainer />
      </div>
      <Cta />
    </div>
  );
};

export default Sign;
