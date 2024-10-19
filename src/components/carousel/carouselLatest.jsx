import { useRef } from "react";
import styles from "./carousel.module.css";
import CardLatest from "../card/cardLatest";

export default function CarouselLatest({ data }) {
  const carouselRef = useRef(null);


  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, 
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
          <CardLatest data={show} key={index} />
        ))}
      </div>

      <button className={styles.scrollButton} onClick={scrollRight}>
        &#10095; 
      </button>
    </div>
  );
}
