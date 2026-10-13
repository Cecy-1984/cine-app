
import { useState, useEffect } from "react";
import peliculasData from "./data/peliculas.json";
import FiltroCategorias from "./components/FiltroCategorias";
import PeliculaCard from "./components/PeliculaCard";
import ModalDetalle from "./components/ModalDetalle";

const categorias = [
    "Todas",
    "Acción",
    "Ciencia Ficción",
    "Comedia",
    "Drama"
];

function App() {
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] =
        useState("Todas");
    const [peliculaSeleccionada, setPeliculaSeleccionada] =
        useState(null);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setPeliculas(peliculasData);
            setCargando(false);
        }, 1500);

        return () => clearTimeout(temporizador);
    }, []);

    const peliculasFiltradas =
        categoriaSeleccionada === "Todas"
            ? peliculas
            : peliculas.filter(
                  pelicula =>
                      pelicula.categoria === categoriaSeleccionada
              );

    return (
        <main>
            <h1 className="titulo-app">CineApp 🎬</h1>

            <p className="subtitulo-app">
                Tu próximo maratón de películas empieza acá.
            </p>

            {cargando ? (
                <p>Cargando películas...</p>
            ) : (
                <>
                    <p>Películas cargadas: {peliculas.length}</p>

                    <FiltroCategorias
                        categorias={categorias}
                        categoriaActiva={categoriaSeleccionada}
                        onSeleccionar={setCategoriaSeleccionada}
                    />

                    <section className="catalogo-peliculas">
                        {peliculasFiltradas.map(pelicula => (
                            <PeliculaCard
                                key={pelicula.id}
                                pelicula={pelicula}
                                onVerDetalles={setPeliculaSeleccionada}
                            />
                        ))}
                    </section>
                </>
            )}

            {peliculaSeleccionada !== null && (
                <ModalDetalle
                    pelicula={peliculaSeleccionada}
                    onCerrar={() => setPeliculaSeleccionada(null)}
                />
            )}
        </main>
    );
}

export default App;
