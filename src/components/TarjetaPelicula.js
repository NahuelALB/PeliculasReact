import styles from "./TarjetaPeliculas.module.css";

export default function TarjetaPelicula({pelicula}) {

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

    return (
        <li className={styles.tarjetaPelicula}>
            <img 
            width={230}
            height={345}
            className={styles.imagenPelicula} 
            src={imagenUrl} 
            alt={pelicula.title} />
            <div>
                <h2 className={styles.title}>{pelicula.title}</h2>  
                <p className={styles.description}>
                    {pelicula.description}
                </p>
                <p className={styles.category}>
                    {pelicula.category}
                </p>
                <button className={styles.btn}>VER AHORA</button>
            </div>
        </li>
    );
}