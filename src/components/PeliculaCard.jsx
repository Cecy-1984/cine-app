function PeliculaCard({ pelicula, onVerDetalles }) {
    return (
        <article>
            <img src={pelicula.posterUrl} alt={pelicula.titulo} />
            <h2>{pelicula.titulo} ({pelicula.anio})</h2>
            <p>{pelicula.categoria}</p>
            <button onClick={() => onVerDetalles(pelicula)}>
                Ver trailer y detalles
            </button>
        </article>
    );
}

export default PeliculaCard;