

const API_KEY = "817e6b531d940a0b1b0da6cea4c19fec"

let getData = async () => {

    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

    try {

        let response = await fetch(apiUrl);
        let data = await response.json();
        return data
    }

    catch {
        console.log("something went wrong")

    }
}










