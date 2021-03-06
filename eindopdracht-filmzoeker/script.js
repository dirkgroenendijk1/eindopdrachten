const movieNav = document.getElementById('movie-container');
const searchBar = document.forms['search-movies'].querySelector('input');

function addMoviesToDom(movies) {
    const movieList = movies.map((movie => {
        let movieList = document.createElement('li');
        //console.log(movieList);
        // var movieTitle = document.createTextNode(`${movie.Title}`);
        // movieList.appendChild(movieTitle);

        let image = document.createElement("img");
        image.src = movie.Poster;

        let link = document.createElement("a");
        link.href = "https:www.imdb.com/title/" + movie.imdbID;
        link.target = "_blank";

        movieList.appendChild(link);
        link.appendChild(image);
        return movieList;
    }));
    movieList.forEach(movieList => {
        movieNav.appendChild(movieList);
    });
};


const removeMovieFromDom = () => {
    const movies = movieNav.childNodes.length;
    for (let i = 0; i < movies; i++) {
        movieNav.removeChild(movieNav.childNodes[0]);
    }
};


function addEventListener() {
    const filmfilter = document.querySelectorAll('input[type=radio][name="movie"]');
    filmfilter.forEach(radio => radio.addEventListener('change', () => {
       // console.log("this " + radio.value + " button is pussed")
        handleOnChangeEvent(radio.value)
    }));
}
addEventListener()


const newMovie = movies.filter((movie) => movie.Year >= 2014);


const filterMovies = (nameInMovieTitle) => {
    const filterMovies = movies.filter((movie) => movie.Title.includes(nameInMovieTitle));
    //console.log(filterMovies)
    return filterMovies;
};


function handleOnChangeEvent(event) {
    removeMovieFromDom();
    switch (event) {
        case 'newmovies':
           // console.log("newmovie");
            addMoviesToDom(newMovie);
            break;
        case 'avenger':
            //console.log("avenger");
            addMoviesToDom(filterMovies("Avenger"));
            break;
        case 'xmen':
           // console.log("X-men");
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case 'princess':
            // console.log("princess");
            addMoviesToDom(filterMovies("Princess"));
            break;
        case 'batman':
            //console.log("batman");
            addMoviesToDom(filterMovies("Batman"));
            break;
        default:
            addMoviesToDom(movies)
    }

}
handleOnChangeEvent();



searchBar.addEventListener('keyup', (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let filteredTitles = movies.filter(movie => {
        return movie.Title.toLowerCase().includes(searchTerm)
    });
    console.log(filteredTitles);
    removeMovieFromDom();
    addMoviesToDom(filteredTitles);
});

