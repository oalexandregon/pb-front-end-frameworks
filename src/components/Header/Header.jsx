import styles from "./Header.module.css"
import { useState } from "react";

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = function () {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.menuContainer}>
      <p className={styles.hamburguer} onClick={toggleMenu}>
        ≡
      </p>
      <p className={styles.logo}>Infnet<span>Flix</span></p>


      <nav className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ""}`}>
        <ul>
          <li className={styles.menuItem}>Lançamentos</li>
          <li className={styles.menuItem}>Recomendados</li>
          <li className={styles.menuItem}>Filmes</li>
          <li className={styles.menuItem}>Séries</li>
        </ul>

      </nav>
    </header>
  );
}