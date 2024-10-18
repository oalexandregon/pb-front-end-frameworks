import { useState, useEffect } from 'react';
import {fetchPopularFilms, fetchNewFilms} from "../../services/api.js";
import Header from "../../components/header/header.jsx";
import Carousel from "../../components/carousel/carousel.jsx"
import styles from "./home.module.css";
import Footer from '../../components/footer/footer.jsx/footer.jsx';



export default function Home() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const [newFilmsData, popularFilmsData] = await Promise.all([
          fetchNewFilms(),
          fetchPopularFilms(),
        ]);
  
        setData(newFilmsData);
        setPopularData(popularFilmsData);
      } catch (error) {
        console.error('Erro ao carregar os filmes:', error);
      } finally {
        setLoading(false);
      }
    };
  
    loadFilms();
  }, []);
  
  console.log("Outro ", data);
  console.log("Popular: ", popularData);

  return (
    <div className={styles.container}>
      <Header />

      {loading ? (
        <p>Carregando...</p> 
      ) : (
        <div className={styles.wrapper}>

          <h2 className={styles.mostRecentTitle}>Lançamentos</h2>
          <Carousel data={data} />
          <h2 className={styles.mostRecentTitle}>Em alta</h2>
          <Carousel data={popularData} />
        </div>
      )}

      <Footer className={styles.footer} />
    </div>
  );
};
