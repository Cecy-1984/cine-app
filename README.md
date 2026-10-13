# 🎬 CineApp — Catálogo de películas y tráilers

CineApp es una aplicación web desarrollada con React y Vite que permite explorar un catálogo de películas, filtrarlas por categoría y consultar sus sinopsis y tráilers.

El proyecto fue realizado como práctica de Desarrollo Web 1 para trabajar con componentes reutilizables, estados y efectos en React.

## ✨ Funcionalidades

- **Catálogo de películas:** visualización de pósters, títulos, años y categorías.
- **Filtros por categoría:** selección de películas de acción, ciencia ficción, comedia y drama.
- **Tarjetas reutilizables:** cada película se muestra mediante un componente independiente.
- **Modal de detalles:** consulta de sinopsis e información de cada película.
- **Tráilers de YouTube:** reproducción de videos integrados en el modal.
- **Carga inicial:** mensaje de carga antes de mostrar el catálogo.
- **Título dinámico:** el título de la pestaña cambia al abrir una película.
- **Diseño adaptable:** interfaz con temática cinematográfica, pensada para distintos tamaños de pantalla.

## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- Vite
- HTML5
- CSS3
- JSON
- YouTube Embed

## 📂 Estructura del proyecto

```text
cine-app/
├── public/
├── src/
│   ├── components/
│   │   ├── FiltroCategorias.jsx
│   │   ├── ModalDetalle.jsx
│   │   └── PeliculaCard.jsx
│   ├── data/
│   │   └── peliculas.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Cómo ejecutar el proyecto localmente

### Requisitos

Tener Node.js y npm instalados.

### Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/Cecy-1984/cine-app.git
   ```

2. Entrá a la carpeta:

   ```bash
   cd cine-app
   ```

3. Instalá las dependencias:

   ```bash
   npm install
   ```

4. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrí en el navegador la dirección local que muestre la terminal.

### Compilar para producción

Para comprobar y generar la versión de producción, ejecutá:

```bash
npm run build
```

## 📚 Conceptos de React aplicados

- **Componentes y props:** división de la interfaz en piezas reutilizables.
- **useState:** administración de la carga, la categoría activa y la película seleccionada.
- **useEffect:** carga inicial simulada y actualización del título de la pestaña.
- **map():** recorrido de las categorías y generación de tarjetas.
- **filter():** selección de películas según su categoría.
- **Renderizado condicional:** visualización del mensaje de carga y apertura del modal.

## 🎯 Objetivo académico

Practicar los fundamentos de React mediante el desarrollo de una aplicación interactiva que organiza y presenta información de películas.

---

Desarrollado por [Cecy-1984](https://github.com/Cecy-1984) 💛