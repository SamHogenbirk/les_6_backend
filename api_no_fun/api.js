

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

const getDadJoke = async () => {

    const apiUrl = "https://icanhazdadjoke.com"


    try {

        const res = await fetch(apiUrl, {
            headers: new Headers({
                Accept: 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => data)
        return res
    }
    catch (err) {

        console.log("something went wrong" + err)
    }



}