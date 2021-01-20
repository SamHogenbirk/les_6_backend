async function movies() {

    let result = await getData()
    return result

}

console.log(movies())