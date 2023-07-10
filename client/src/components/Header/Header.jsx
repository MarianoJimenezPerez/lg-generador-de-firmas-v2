import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"../"}>
        <div className={styles.header_logo}>
          <img src="/latamly_group_logo.png" alt="Logo latamly group" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
