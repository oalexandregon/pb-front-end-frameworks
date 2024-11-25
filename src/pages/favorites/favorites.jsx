import styles from "./favorites.module.css";
import { useAppContext } from "../../context";
import CarouselLatest from "../../components/card/cardLatest";
import Header from "../../components/header/header.jsx";
import Footer from '../../components/footer/footer.jsx';

export default function Favorites() {
  const { favorites } = useAppContext();

  return (
    <div className={styles.container}>
      <Header/>
      <h1 className={styles.favoritesTitle}>Meus Favoritos</h1>
      <div className={styles.wrapper}>
        {favorites.length ? (
          favorites.map((item) => <CarouselLatest key={item.id} data={item} />)
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
