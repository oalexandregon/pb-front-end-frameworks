import styles from "./card.module.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppContext } from "../../context";

export default function Card({ data }) {
  const { favorites, toggleFavorite } = useAppContext();

  const isFavorite = favorites.some((fav) => fav.id === data.id);

  const imageUrl = data.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
    : "https://via.placeholder.com/500x281?text=No+Image+Available";

  return (
    <div className={styles.card}>
      <Link to={`/${data.id}`}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={data.name || "Imagem de TV Show"} />
        </div>
        <div className={styles.content}>
          <p>{data.title}</p>
          <p>{`Classificação: ${data.vote_average}`}</p>
        </div>
      </Link>
      <div
        className={styles.favoriteIcon}
        onClick={() => toggleFavorite(data)}
      >
        {isFavorite ? (
          <FavoriteIcon className={styles.filledIcon} />
        ) : (
          <FavoriteBorderIcon className={styles.borderIcon} />
        )}
      </div>
    </div>
  );
}
