import styles from "./card.module.css";

export default function Card({ data }) {
    const imageUrl = data.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
        : 'https://via.placeholder.com/500x281?text=No+Image+Available';

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={data.name || "Imagem de TV Show"} />
            </div>
            <div className={styles.content}>
                <p>{data.original_title}</p>
                <p>{`Classificação: ${data.vote_average}`}</p>
            </div>
        </div>
    );
}
