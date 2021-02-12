

const getTrumpMeme = async () => {

    const apiUrl = "https://tronalddump.io/random/meme"

    try {

        const res = await fetch(apiUrl)

            .then(data => data)

        return res
    }
    catch (err) {

        console.log("something went wrong" + err)
    }
}

const getTrumQuote = async () => {

    const apiUrl = "https://tronalddump.io/random/quote"



    try {

        const res = await fetch(apiUrl)
            .then(response => response.json())
            .then(data => data)

        return res
    }
    catch (err) {

        console.log("something went wrong" + err)
    }
}