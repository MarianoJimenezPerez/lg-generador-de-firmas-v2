import React from "react";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <div className="steps">
      <div className="error">
        Ups. Parece que la resolución de tu dispositivo no es compatible con
        nuestra herramienta
      </div>
      <div className="steps__wrapper">
        <h1>¿Qué sigue?</h1>
        <div className="steps__container">
          <div className="step">
            <span>1</span>
            <p>
              Ingresá a gmail <b>Ajustes</b> {"> "} <b>Ver todos los justes </b>
              {"> "}
              Scrolleá hasta <b>firma</b>.
            </p>
          </div>
          <div className="step">
            <span>2</span>
            <p>
              Si ya tenés una firma, debés borrar todo el contenido anterior.
            </p>
          </div>
          <div className="step">
            <span>3</span>
            <p>
              Si es la primera vez que vas a generar tu firma presionar en:
              <b> Crear</b> {">"} Colocar un <b>nombre</b>, por ejemplo "firma
              Latamly" {">"} ”Presioná la tecla <b>Control + V”</b> en el
              cuadrado de la derecha y <b>se pegará la firma</b>.
            </p>
          </div>
          <div className="step">
            <span>4</span>
            <p>
              En el cuadrante de <b>"Valores predeterminados de firma"</b>{" "}
              seleccioná el correo y elegí a cuál le asignarás la firma, y en
              los desplegables de más abajo "Para correos nuevos" y "Para
              Respuestas/Envíos" seleccioná el nombre de la firma que{" "}
              <b>acabás de crear </b>(en el ejemplo "Firma Latamly")
            </p>
          </div>
          <div className="step">
            <span>5</span>
            <p>
              Scrolleá hasta el final y presioná en <b>"Guardar Cambios"</b>
            </p>
          </div>
          <div className="step">
            <span>6</span>
            <p>
              ¡Listo, ya tenés tu firma registrada y lista para usar! Si
              necesitás generar otra, presioná en el botón de volver aquí{" "}
              <b>abajo</b>.
            </p>
          </div>
        </div>
        <Link to={"/sign"}>←</Link>
      </div>
    </div>
  );
};

export default Steps;
