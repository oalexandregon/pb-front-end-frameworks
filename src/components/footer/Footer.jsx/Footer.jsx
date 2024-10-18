import { useState } from "react";
import styles from "./footer.module.css"

export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = function () {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <footer className={styles.footer}>
        <h5>Todos os direitos reservados©</h5>
      </footer>
    );
}