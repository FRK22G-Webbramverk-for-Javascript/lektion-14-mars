import MovieCard from "../MovieCard/MovieCard";

function DisplayMovies(props) {

    const movieCardComponents = props.movies.map((movie) => {
        return <MovieCard movie={ movie } key={ movie.imdbID } />
    });

    return (
        <section>
            { movieCardComponents.length > 0 ? 
            movieCardComponents : <h2>Inga sökträffar</h2> } { /** En tenary operator, en variant av en if/else - sats */}
        </section>
    )
}

export default DisplayMovies;