import styles from "./filmCarousel.module.css"
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

export default function FilmCarousel() {
    const imgArr = [
        "https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg",

        " https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",

        "https://media.istockphoto.com/id/1316134499/fr/photo/une-image-conceptuelle-dune-loupe-sur-fond-bleu-avec-un-mot-exemple-zoom-%C3%A0-lint%C3%A9rieur-de-la.webp?b=1&s=170667a&w=0&k=20&c=-_ZyClpAOy-wrcGDG8TiWWyffUnJxHFC7f_OxMk694k="

    ];

    function setArrayIndex() {

    }

    return (
        <div className={styles.container}>
            <div>
            <button className={styles.buttonNext} onclick={setArrayIndex()}>
                            <IoMdArrowForward />
                        </button>
                        <button className={styles.buttonBack} onclick={setArrayIndex()}>
                            <IoArrowBack />
                        </button>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.slider}>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg" alt="Imagem exemplo" />
                        </div>
                        

                        <div className={styles.content}>
                            <p>nome do filme</p>
                            <p>nome do filme</p>
                            <p>nome do filme</p>
                            <p>nome do filme</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}