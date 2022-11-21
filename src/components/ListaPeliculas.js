import peliculas from './Peliculas.json';
import TarjetaPelicula from './TarjetaPelicula';
import styles from './ListaPeliculas.module.css';
export default function ListaPeliculas() {

    return (
        <ul className={styles.listadoAuto}>
            {peliculas.map((pelicula) => 
                <TarjetaPelicula key={pelicula.id} pelicula = {pelicula} />
            )}
        </ul>
    );
}