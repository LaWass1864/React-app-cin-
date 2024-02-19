import React from "react";

const Card = ({ movie }) => {
    // format de la date de sortie
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
    };
    // fonction le trouveur de genre
    const genreFinder = () => {
        //  on stock les genres dans un Array
        let genreArray = [];
        // il peut y avoir plusieurs genre dans un film, on boucle
        for (let i = 0; i < movie.genre_ids.length; i++) {
            //  liste de genre de fims , si j'amais tu as ce chiffre là, tu le rajoutes
            switch (movie.genre_ids[i]) {
                case 28:
                    genreArray.push(`Action`);
                    break;
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Policier`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Famille`);
                    break;
                case 14:
                    genreArray.push(`Fantasy`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>)
    };

    // fonction add storage
    const addStorage = () => {
//  creation de la variable storeData qui va garder lesid des movies selectionnés
        let storeData = window.localStorage.movies ? window.localStorage.movies.split(",") : [];

// on s'assure qu'il n'y a pasde double et on les push dans le store data
        if (!storeData.includes(movie.id.toString())) {
            storeData.push(movie.id);
            window.localStorage.movies = storeData;
        }
    }

    return (
        <div className="card">
            <img
                src={
                    movie.poster_path

                        ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
                        : "./img/poster.jpg"
                }
                alt={`affiche ${movie.title}`}
            />
            <h2>{movie.title}</h2>
            {movie.release_date ? (
                <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
            ) : null}
            <h4>
                {movie.vote_average.toFixed(1)}/10 <span>⭐</span>
            </h4>
            {/* genre des films */}
            <ul>
                {/* est ce que movie.genre_ids est true */}
                {movie.genre_ids ? genreFinder()
                    : null}
            </ul>
            {/*  on met une ternaire , si Synopis existe sinon on ne met rien */}
            {movie.overview ? <h3> Synopsis</h3> : ""}
            <p>{movie.overview}</p>
            {/*  bouton ajouter au coup de coeur / ce sera un affichage conditionnel */}
            <div className="btn"
                onClick={() => addStorage()}> Ajouter aux coups de coeur </div>
            {/*  quand on clique on envoi dans le local storage
             */}
        </div>
    );
};

export default Card;
