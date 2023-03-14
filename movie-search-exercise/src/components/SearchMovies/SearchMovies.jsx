import { useState } from "react"

function SearchMovies(props) {
    const [title, setTitle] = useState(''); // Detta state används för att spara värdet från inputfältet

    async function handleClick() {
        const response = await fetch(`http://www.omdbapi.com/?apikey=37fe945a&s=${title}`);
        const data = await response.json();
        console.log(data);

        // Filtrera ut enbart filmer (kan finnas spel med)
        const onlyMovies = data.Search.filter((movie) => {
            if (movie.Type === 'movie') {
                return movie;
            } 
        });

        if (data.Response === 'True') {
            props.updateMovies(onlyMovies); // Uppdatera movies i App med alla filmer från API-anropet
        } else {
            props.updateMovies([]); // Ifall inga filmer hittades sätt en tom array
        }

        // Ovan fast med en tenary operator om du dock har flera saker som ska se i en if-sats så använd ovan istället
        // data.Response === 'True' ? props.updateMovies(data.Search) : props.updateMovies([]);
    }

    return (
        <section>
            <input type="text" placeholder="Skriv in en filmtitel"
            onChange={ (event) => { setTitle(event.target.value) } } />
            <button onClick={ handleClick }>Sök</button>
        </section>
    )
}

export default SearchMovies
