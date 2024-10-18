import Footer from '../../components/footer/footer.jsx/footer.jsx';
import Header from "../../components/header/header.jsx";
import styles from "./details.module.css";

import { fetchNewFilms } from "../../services/api.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {

  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const newFilmsData = await fetchNewFilms();
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



  return (
    <div className={styles.container}>
      <Header />
      <h1>{filmInfo.original_title}</h1>
      <Footer />
    </div>
  );
}