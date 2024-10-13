import Header from "../components/header/header.jsx"
import Card from "../components/card/card.jsx"
import styles from "./home.module.css"

const films = [
    {
      title: "The Witcher",
      synopsis: "Um caçador de monstros luta para encontrar seu lugar em um mundo onde as pessoas costumam ser mais perversas do que as feras.",
      releaseYear: 2019,
      duration: "2 temporadas",
      genre: ["Ação", "Fantasia", "Aventura"],
      rating: "18+",
      language: "Inglês",
      image: "https://example.com/witcher.jpg"
    },
    {
      title: "Stranger Things",
      synopsis: "Quando um garoto desaparece, a cidade é envolvida em um mistério envolvendo experimentos secretos, forças sobrenaturais e uma menina muito estranha.",
      releaseYear: 2016,
      duration: "4 temporadas",
      genre: ["Suspense", "Ficção científica", "Terror"],
      rating: "16+",
      language: "Inglês",
      image: "https://example.com/strangerthings.jpg"
    },
    {
      title: "La Casa de Papel",
      synopsis: "Um homem conhecido como O Professor recruta oito criminosos habilidosos para realizar um ambicioso assalto à Casa da Moeda da Espanha.",
      releaseYear: 2017,
      duration: "5 temporadas",
      genre: ["Ação", "Suspense", "Crime"],
      rating: "16+",
      language: "Espanhol",
      image: "https://example.com/lacasadepapel.jpg"
    },
    {
      title: "Bird Box",
      synopsis: "Em um mundo pós-apocalíptico, uma mãe e seus filhos fazem uma jornada perigosa vendados para escapar de uma entidade sobrenatural que leva as pessoas ao suicídio.",
      releaseYear: 2018,
      duration: "2h 4m",
      genre: ["Terror", "Suspense", "Ficção científica"],
      rating: "16+",
      language: "Inglês",
      image: "https://example.com/birdbox.jpg"
    },
    {
      title: "Parasita",
      synopsis: "Uma família pobre se infiltra na vida de uma família rica, mas sua ambição acaba desencadeando uma série de eventos desastrosos.",
      releaseYear: 2019,
      duration: "2h 12m",
      genre: ["Drama", "Suspense"],
      rating: "16+",
      language: "Coreano",
      image: "https://example.com/parasita.jpg"
    }
  ];
  

export default function Home() {
    return (
        <div className={styles}>
            <Header />
            
                <h2>Lançamentos</h2>
                <div className={styles.wrapper}>
                {films.map((film, index) => (
                    <Card filmData={film} key={index}/>
                ))}
            </div>

        </div>
    )
}