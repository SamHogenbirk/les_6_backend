

fetch("https://swapi.dev/api/people/1/")
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

