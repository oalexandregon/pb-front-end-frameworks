import styles from "./favorites.module.css";
import { useAppContext } from "../../context";
import Header from "../../components/header/header.jsx";
import Footer from '../../components/footer/footer.jsx';
import Card from "../../components/card/card.jsx"

export default function Favorites() {
  const { favorites } = useAppContext();

  return (
    <div className={styles.container}>
      <Header/>
      <h1 className={styles.favoritesTitle}>Meus Favoritos</h1>
      <div className={styles.wrapper}>
        {favorites.length ? (
          favorites.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <p className={styles.noFavoritesMessage}>
            Você ainda não adicionou favoritos.
          </p>
        )}
      </div>
      <Footer/>
    </div>
  );
}
