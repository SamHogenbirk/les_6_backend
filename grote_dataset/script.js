let log = console.log

//HTML references
const references = {

    resultList: document.getElementById("result-list"),
    allCountries: document.getElementById("allCountries"),
    most: document.getElementById("mostPeople"),
    cards: document.getElementById("CreditCard"),
    average: document.getElementById("average"),
    all: document.getElementsByClassName("region-button")

};

//verwijdert huidige getoonde lijst
const removeList = () => {

    while (references.resultList.firstChild) {
        references.resultList.removeChild(references.resultList.firstChild)
    }

};

//maakt lijst op basis van gekozen knop
const makelist = (input) => {

    removeList()

    input.forEach((item) => {

        const newLi = document.createElement("li")
        newLi.innerHTML = item
        references.resultList.appendChild(newLi)
    })
};

//print lijst van alle landen gesorteerd op naam
references.allCountries.addEventListener('click', (e) => {

    const output = randomPersonData

        .map((item) => item.region)
        .sort((a, b) => a > b ? 1 : -1)

    makelist(output)
});

references.average.addEventListener('click', (e) => {

    removeList()
    Array.from(references.all)
        .forEach((item) => item.classList.toggle(("visible")))
})

//print lijst van landen en de aantal inwoners gesorteed op meeste inwonders
references.most.addEventListener('click', (e) => {

    let count = [];
    const sorted = [];
    const output = [];

    randomPersonData
        .map((item) => item.region)
        .forEach(((item) => {

            count[item] = (count[item] || 0) + 1
        }));

    //nieuwe array met objecten om te kunnen sorteren
    for (const region in count) {

        sorted.push({
            land: region,
            num: count[region]
        });
    }
    // sorteren op aantal inwoners + Human readable maken
    sorted.sort((a, b) => a.num < b.num ? 1 : -1).forEach((item) => {

        output.push(`Land: ${item.land} <br>
                  Aantal inwoners: ${item.num}<br> <br>`);
    });

    makelist(output)
});

//print lijst met creditcards die volgend jaar verlopen, eerste verloop datum eerst
references.cards.addEventListener('click', (e) => {

    const sorted = []
    const output = []

    const date = new Date();
    const NextYear = date.getFullYear() + 1;
    const twoDigitYear = NextYear.toString().substr(-2);

    randomPersonData
        .filter((item) => item.age >= 18)
        .filter((item) => item.credit_card.expiration
            .slice(-2) === twoDigitYear)
        .forEach((item) => {

            sorted.push({

                name: item.name,
                lastName: item.surname,
                phone: item.phone,
                cardNumber: item.credit_card.number,
                expdate: item.credit_card.expiration
            });
        });

    // gesorteer op datum + Human readable maken
    sorted.sort((a, b) => new Date(a.expdate) - new Date(b.expdate)).forEach((item) => {

        output.push(`Naam: ${item.name} <br>
                     Achternaam: ${item.lastName} <br>
                     Telefoon: ${item.phone} <br>
                     Kaart nummer: ${item.cardNumber} <br>
                     Verloop datum: ${item.expdate} <br> <br>`);
    })

    makelist(output)
});


Array.from(references.all).forEach((item) => item.addEventListener('click', (e) => {

    let output = []
    let filteredData = randomPersonData.filter(({ region }) => region == e.target.id),
        avg = filteredData.reduce((r, c) => r + c.age, 0) / filteredData.length;


    output.push(`Land: ${e.target.innerHTML} <br>
                 Gemiddelde leeftijd: ${Math.round(avg)}`)


    makelist(output)
}))