import styles from "./header.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = function () {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.menuContainer}>
      <p className={styles.hamburguer} onClick={toggleMenu}>
        ≡
      </p>

      <Link to={"/"} className={styles.logo}>
        <p >
          Infnet<span>Flix</span>
        </p>
      </Link>



      <nav className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ""}`}>
        <ul>
        <li >
            <Link
              className={styles.menuItem}
              to="/">
              Home
            </Link>
          </li>

          <li >
            <Link
              className={styles.menuItem}
              to="/favoritos">
              Meus Favoritos
            </Link>
          </li>
          <li >
            <Link
              className={styles.menuItem}
              to="/filmes">
              Filmes
            </Link>
          </li>
          <li >
            <Link
              className={styles.menuItem}
              to="/tv">
              Programas de TV
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}