import Header from "../../components/header/header.jsx";
import styles from "./movies.module.css";
import Footer from '../../components/footer/footer.jsx';
import Card from "../../components/card/card.jsx"
import { fetchNewFilms } from "../../services/api.js";
import { useState, useEffect } from "react";

export default function Movies() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const loadTVSeries = async () => {
            try {
                const newMovies = await fetchNewFilms();



                setData(newMovies);
                console.log("TV Series", newMovies)
            } catch (error) {
                console.error('Erro ao carregar as séries de TV:', error);
            } finally {
                setLoading(false);
            }
        };

        loadTVSeries();
    }, []);

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.wrapper}>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <div className={styles.wrapper}>

                        <h1 className={styles.favoritesTitle}>Novos Filmes</h1>
                        <div className={styles.tvShows}>
                        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
                        </div>
                        
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
