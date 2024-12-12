const apiKey = import.meta.env.VITE_TMDB_API_KEY

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};


export const fetchNewFilms = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const films = await response.json();

    return films.results;
  } catch (err) {
    console.error('Erro ao buscar filmes:', err);
    return [];
  }
}

export const fetchPopularFilms = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const films = await response.json();
    console.log(films)
    return films.results;
  } catch (err) {
    console.error('Erro ao buscar filmes:', err);
    return [];
  }
}

export const fetchTvSeries = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular', options)
    const series = await response.json();
    console.log("Séries TV API", series)

    return series.results;
  } catch (err) {
    console.error('Erro ao buscar Séries de TV:', err);
    return [];
  }
}

