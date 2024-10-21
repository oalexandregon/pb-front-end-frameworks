import styles from "./card.module.css";
import {Link} from "react-router-dom";

export default function CardPopular({ data }) {


    const imageUrl = data.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
        : 'https://via.placeholder.com/500x281?text=No+Image+Available';

    return (
        <div className={styles.card}>
            <Link to={`populares/${data.id}`}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={data.name || "Imagem de TV Show"} />
            </div>
            <div className={styles.content}>
                <p>{data.title}</p>
                <p>{`Classificação: ${data.vote_average}`}</p>
            </div>
            </Link>
           
        </div>
    );
}
