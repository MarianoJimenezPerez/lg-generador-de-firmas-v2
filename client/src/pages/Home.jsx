import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="error">
        Ups. Parece que la resolución de tu dispositivo no es compatible con
        nuestra herramienta
      </div>
      <div className="home__container">
        <h1>Involucrados en crear tu firma de mail</h1>
        <div className="home__welcome__box">
          <h2>¡Bienvenid@!</h2>
          <p>
            Te presentamos una nueva herramienta que creamos para generar tu
            nueva firma digital y puedas utilizarla en los correos electrónicos
            que enviás día a día. Esta herramienta, te permite en simples pasos
            renovar la forma de representar las marcas que son parte de Latamly.
            Así nos seguimos involucrando con nuestros clientes y proveedores,
            llevando al frente las marcas que representamos ¿Empezamos?
          </p>
        </div>
        <Link to={`/sign`}>
          <button className="btn__primary">¡Creá tu firma!</button>
        </Link>
      </div>
      <div className="home__logo">
        <img src="/latamly_group_logo.png" alt="Logo latamly group" />
      </div>
    </main>
  );
};

export default Home;
