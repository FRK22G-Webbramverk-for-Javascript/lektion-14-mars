function MovieCard(props) {
    return (
        <article>
            <img src={ props.movie.Poster } />
            <p>{ props.movie.Title }</p>
        </article>
    )
}

export default MovieCard;