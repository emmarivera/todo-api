API Películas

{
    id: 1,
    title: "Pacific Rim",
    year: 2022,
    director: "Guillermo del Toro",
    genre: ['Sci-fi', 'action',] //opcional
}

get /movies -> obtener todas las películas
post /movies -> crear una película nueva
get /movies/1 -> obtener la pelicula con el id 1 (por parametros dinamicos)

En express