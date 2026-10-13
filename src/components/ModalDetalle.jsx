import { useEffect } from "react";

function ModalDetalle({ pelicula, onCerrar }) {
    useEffect(() => {
        document.title = `Viendo: ${pelicula.titulo}`;

        return () => {
            document.title = "CineApp - Catalogo";
        };
    }, [pelicula.titulo]);
    return (
        <div className="modal-overlay">
            <section className="modal-contenido">
                <button onClick={onCerrar}>
                    ✕ Cerrar
                </button>

                <h2>{pelicula.titulo} ({pelicula.anio})</h2>

                <p>{pelicula.categoria}</p>

                <p>{pelicula.sinopsis}</p>

                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${pelicula.youtubeId}`}
                    title={`Tráiler de ${pelicula.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
}

export default ModalDetalle;