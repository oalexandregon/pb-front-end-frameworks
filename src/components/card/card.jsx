import styles from "./card.module.css"

export default function Card({filmData}) {

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={filmData.image} alt="Imagem exemplo" />
            </div>


            <div className={styles.content}>
                <p>{filmData.title}</p>
            </div>
        </div>
    );
}