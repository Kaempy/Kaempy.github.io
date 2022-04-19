import React, { Fragment } from "react";
import styles from "../Styles/Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.h1}>CV Form Application</h1>
        <nav>
          <ul>
            <li className={styles.list}>
              <a href="/" alt="Logout">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
