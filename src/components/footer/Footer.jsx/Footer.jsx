import styles from "./Footer.module.css"

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
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
          alt="logo empresa exemplo"
          className={styles.image}
        />

  
        <ul className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ""}`}>
          <li className={styles.menuItem}>Opção 1</li>
          <li className={styles.menuItem}>Opção 2</li>
          <li className={styles.menuItem}>Opção 3</li>
          <li className={styles.menuItem}>Opção 4</li>
          <li className={styles.menuItem}>Opção 5</li>
        </ul>
      </header>
    );
}