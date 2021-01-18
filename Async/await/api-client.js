

const API_KEY = "817e6b531d940a0b1b0da6cea4c19fec"

async function getData() {

    const apiUrl = `https://api.themoviedb.org/3/movie/299536?api_key=${API_KEY}`

    try {

        fetch(apiUrl, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {

                let res = data

                return data
            })
    }

    catch {
        console.log(error)
    }
}





