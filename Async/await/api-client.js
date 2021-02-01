

const API_KEY = "817e6b531d940a0b1b0da6cea4c19fec"

//GET movies by genre
const getDataByGenre = async () => {

    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

    try {

        const res = await fetch(apiUrl, { method: "GET" })
            .then(response => response.json())
            .then(data => data)
        return res

    }

    catch (err) {

        console.log("something went wrong" + err)
    }
}

//GET movies by rating?
const getDataByRating = async () => {

    const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`

    try {

        const res = await fetch(apiUrl, { method: "GET" })

            .then(response => response.json())
            .then(data => data.results)
        return res
    }

    catch (err) {

        console.log('something went wrong' + err)
    }
}

//GET alltime favorite
const getSingleMovie = async () => {

    const apiUrl = `https://api.themoviedb.org/3/find/tt0118715?api_key=817e6b531d940a0b1b0da6cea4c19fec&language=en-US&external_source=imdb_id`

    try {

        const res = await fetch(apiUrl, { method: "GET" })

            .then(response => response.json())
            .then(data => data.movie_results[0])
        return res
    }

    catch (err) {

        console.log('something went wrong' + err)
    }
}

//GET best action movies
const getActionMovies = async () => {

    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=28`

    try {

        const res = await fetch(apiUrl, { method: "GET" })

            .then(response => response.json())
            .then(data => data.results)
        return res
    }

    catch (err) {

        console.log("something went wrong " + err)
    }
}

//GET movies from 1975
const getMovies1975 = async () => {

    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&sort_by=original_title.asc&primary_release_year=1975`

    try {

        const res = await fetch(apiUrl, { method: "GET" })

            .then(response => response.json())
            .then(data => data.results)
        return res
    }
    catch (err) {

        console.log("something went wrong " + err)
    }
}



