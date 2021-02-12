
const references = {
    imgWrapper: document.getElementById("wrapper")
}

const removeImage = () => {

    while (references.imgWrapper.firstChild) {
        references.imgWrapper.removeChild(references.imgWrapper.firstChild)

    }
}

const trumpMeme = async () => {

    await getTrumpMeme()
        .then(Response => {
            removeImage()
            let newImg = document.createElement("img")
            newImg.setAttribute("src", Response.url)
            references.imgWrapper.appendChild(newImg)
        })
}

const trumpQuote = async () => {

    await getTrumQuote()
        .then(Response => {
            console.log(Response)
            document.getElementById("test").innerHTML = Response.value
        })

}



document.getElementById("button-meme").addEventListener('click', (e) => {

    trumpMeme()
});

document.getElementById("button-quote").addEventListener('click', (e) => {

    trumpQuote()

})