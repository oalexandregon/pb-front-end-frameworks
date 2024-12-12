import { useState, React } from "react";
import styles from "./searchBar.module.css";


export default function SearchBar({ data, setFilteredData }) {
    const [searchQuery, setSearchQuery] = useState("");

    

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = data.filter((item) =>
            item.original_name.toLowerCase().includes(query) ||
            (item.type && item.type.toLowerCase().includes(query))
        );

        setFilteredData(filtered);
    };

    return (
        <div className={styles.searchBar}>
            
                <p className={styles.title}>Pesquisar</p>
            

            <input
                type="text"
                placeholder="Pesquise suas produções favoritas..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.input}
            />
        </div>
    );
}
