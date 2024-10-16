// components/Carousel/Carousel.jsx
import { useRef } from "react";
import styles from "./carousel.module.css";
import Card from "../card/card";

export default function Carousel({ data }) {
  const carouselRef = useRef(null);

  // Função para rolar à esquerda
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Ajuste o valor conforme necessário
        behavior: "smooth",
      });
    }
  };


  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        &#10094; 
      </button>

      <div className={styles.carousel} ref={carouselRef}>
        {data.map((show, index) => (
          <Card data={show} key={index} />
        ))}
      </div>

      <button className={styles.scrollButton} onClick={scrollRight}>
        &#10095; 
      </button>
    </div>
  );
}
