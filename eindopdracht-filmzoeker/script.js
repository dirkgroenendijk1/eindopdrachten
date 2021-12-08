const movieNav = document.getElementById('movie-container');
// inladen movies van data op de dom
function addMoviesToDom(movies) {
    var movieList = movies.map((movie => {
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
