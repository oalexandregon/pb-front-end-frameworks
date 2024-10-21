import Footer from '../../components/footer/footer.jsx';
import Header from "../../components/header/header.jsx";
import styles from "./details.module.css";

import { fetchPopularFilms } from "../../services/api.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetailsPopular() {

  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilms = async () => {
      try {

        const newFilmsData = await fetchPopularFilms();
        const selectedFilm = newFilmsData.find((film) => film.id === parseInt(id));

        if (selectedFilm) {
          setFilmInfo(selectedFilm);
        } else {
          console.error('Filme não encontrado');
        }
      } catch (error) {
        console.error('Erro ao carregar os filmes:', error);
      } finally {
        setLoading(false);
      }

    };
    loadFilms();

  }, []);

  const imageUrl = filmInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`
    : 'https://via.placeholder.com/500x281?text=No+Image+Available';

  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>


        <Header />

        {loading ? (<p> Carregando...</p>) : (
          <>
            <div className={styles.filmInfoContainer}>
              <h1>{filmInfo.title}</h1>
              <p>{filmInfo.overview}</p>
            </div>

            <div className={styles.divider}>
              <hr />
            </div>

            <div className={styles.filmDetails}>
              <p>{`Lançamento: ${filmInfo.release_date}`}</p>
              <p>{`Nota: ${filmInfo.vote_average}`}</p>
              <p>{`Número de votos: ${filmInfo.vote_count}`}</p>
              <p>{`Popularidade: ${filmInfo.popularity}`}</p>

            </div>
          </>


        )}

      </div>

      <Footer className={styles.footer} />
    </div>
  );
}