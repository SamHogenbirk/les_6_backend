let log = console.log
const vak = "wiskunde"

function huiswerkMaken(vak, callback) {

    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
    }, 2000)

};


function klaarMetHuiswerk() {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
};

huiswerkMaken(vak, klaarMetHuiswerk);

