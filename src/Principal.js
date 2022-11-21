import ListaPeliculas from "./components/ListaPeliculas";
import styles from "./Principal.module.css";

export default function Principal() {

   return <div>
        <header>
            <h1 className={styles.title}>Peliculas Disponibles!</h1>
        </header>
        <main>
            <ListaPeliculas />
        </main>
    </div>;
}
