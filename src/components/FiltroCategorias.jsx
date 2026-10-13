function FiltroCategorias({ categorias, categoriaActiva, onSeleccionar }) {
    return (
        <div className="filtros-categorias">
            {categorias.map(categoria => (
                <button
                    key={categoria}
                    onClick={() => onSeleccionar(categoria)}
                    className={
                        categoria === categoriaActiva
                            ? "categoria-activa"
                            : ""
                    }
                >
                    {categoria}
                </button>
            ))}
        </div>
    );
}

export default FiltroCategorias;