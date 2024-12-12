import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Card from "../../components/card/card.jsx";
import SearchBar from "../../components/searchBar/searchBar.jsx"; 
import { fetchNewFilms } from "../../services/api.js";
import { useState, useEffect } from "react";
import styles from "./movies.module.css";

export default function Movies() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 

   

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const newMovies = await fetchNewFilms();
                setData(newMovies);
                setFilteredData(newMovies); 
                console.log(newMovies)
                
            } catch (error) {
                console.error("Erro ao carregar os filmes:", error);
            } finally {
                setLoading(false);
            }
        };

        loadMovies();
    }, []);
    
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.wrapper}>
                <SearchBar data={data} setFilteredData={setFilteredData} type="movie" />

                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <div className={styles.wrapper}>
                        <h1>Novos Filmes</h1>
                        <div className={styles.tvShows}>
                            {filteredData.map((item) => (
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
