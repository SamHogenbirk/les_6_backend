
//objects of UL's
const references = {

    genreList: document.getElementById("genre-list"),
    ratingList: document.getElementById("rating-list"),
    favoriteList: document.getElementById("fav-list"),
    actionList: document.getElementById("action-list"),
    list1975: document.getElementById("1975")

}

//creates list of all time favorite
const favMovie = async () => {

    await getSingleMovie()

        .then(result => {

            makeList("Title: ", result.title, "", "", references.favoriteList)

        })
}

favMovie()

//creates list of all movies by genre + ID
const moviesGenreList = async () => {

    await getDataByGenre()
        .then(result => result.genres.forEach(element => {

            // console.log(element)
            makeList("Genre: ", element.name, "--ID: ", element.id, references.genreList)
        }));

}

moviesGenreList()

//creates list of top 10 movies by rating
const movieRatingList = async () => {

    const arr = []
    await getDataByRating()

        .then(result => result.filter((item) => item.title))
        .then(data => data.forEach((item) => arr.push({ "name": item.title, "rating": item.popularity })
        ))

    arr.sort((a, b) => (a.rating < b.rating ? 1 : -1))
    let finalList = arr.slice(0, 10)
    finalList.forEach((element) => {

        // console.log(element)
        makeList("Title: ", element.name, "--Rating: ", element.rating, references.ratingList)
    })
}

movieRatingList()

//creates list of best action movies
const bestActionMovies = async () => {

    await getActionMovies()
        .then(result => result.forEach((element) => {

            // console.log(element)
            makeList("Title: ", element.title, "--rating: ", element.popularity, references.actionList)
        }));
}

bestActionMovies()

const movies1975 = async () => {

    await getMovies1975()
        .then(result => result.forEach((element) => {

            // console.log(element)
            makeList("Title: ", element.title, "--Date: ", element.release_date, references.list1975)
        }));
}

movies1975()

//creates and appends LI's
let makeList = (name, key, id, value, list) => {

    const newLi = document.createElement("li")
    newLi.innerHTML = `${name} ${key} ${id} ${value}`
    list.appendChild(newLi)

}

