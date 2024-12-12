import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Card from "../../components/card/card.jsx";
import SearchBar from "../../components/searchBar/searchBar.jsx"; // Adicionado o SearchBar
import { fetchTvSeries } from "../../services/api.js";
import { useState, useEffect } from "react";
import styles from "./tvShows.module.css";

export default function TvSeries() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // Adicionado estado para dados filtrados

    useEffect(() => {
        const loadTVSeries = async () => {
            try {
                const newTvSeries = await fetchTvSeries();
                setData(newTvSeries);
                setFilteredData(newTvSeries); // Inicializa os dados filtrados com todos os itens
                console.log("TV Series", newTvSeries);
            } catch (error) {
                console.error("Erro ao carregar as séries de TV:", error);
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
                <SearchBar data={data} setFilteredData={setFilteredData} /> {/* Adicionado SearchBar */}

                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <div className={styles.wrapper}>
                        <h1 className={styles.favoritesTitle}>Popular na TV</h1>
                        <div className={styles.tvShows}>
                            {filteredData.map((item) => (
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
