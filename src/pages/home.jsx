import { useState, useEffect } from 'react';
import Header from "../components/header/header.jsx";
import Carousel from "../components/carousel/carousel.jsx"
import styles from "./home.module.css";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDViMGVlN2U3ZjgyZDNmYjk5ZWQyNzhlYTViZDExMCIsIm5iZiI6MTcyOTAzNDUwMi4wOTc0MzksInN1YiI6IjY2OWVmOGZjZDllZWI3MTYwMjJlNjExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f7h6AJgbrji_W12VZ7lF-f3i-_SO5YzphC62CDLpgMU'
  }
};


async function fetchFilms() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const films = await response.json();
    return films.results; 
  } catch (err) {
    console.error('Erro ao buscar filmes:', err);
    return [];
  }
}

export default function Home() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    fetchFilms().then((filmsData) => {
      setData(filmsData); 
      setLoading(false); 
      console.log(filmsData)
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h2>Lançamentos</h2>

      {loading ? (
        <p>Carregando...</p> 
      ) : (
        <div className={styles.wrapper}>
          <Carousel data={data} />
        </div>
      )}
    </div>
  );
}
