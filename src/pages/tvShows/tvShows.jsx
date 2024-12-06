import Header from "../../components/header/header.jsx";
import styles from "./tvShows.module.css";
import Footer from '../../components/footer/footer.jsx';
import Card from "../../components/card/card.jsx"
import { fetchTvSeries } from "../../services/api.js";
import { useState, useEffect } from "react";

export default function TvSeries() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const loadTVSeries = async () => {
            try {
                const newTvSeries = await fetchTvSeries();



                setData(newTvSeries);
                console.log("TV Series", newTvSeries)
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

                        <h1 className={styles.favoritesTitle}>Popular na TV</h1>
                        <div className={styles.tvShows}>
                        {data.map((item) => (
          <Card key={item.id} data={item} type="TV" />
        ))}
                        </div>
                        
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
