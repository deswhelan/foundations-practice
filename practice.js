var fs = require('fs')

function makeSandwichWith(filling) {
    
}

var practiceString = "is 'this' still a string?";
console.log(practiceString);

fs.readFile('spinal.txt', 'utf8', displayText)


function displayText (err, data) {
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
}

const data = require('./fighters.json')
const fighterWeWantToWrite =  JSON.stringify(data["fighters"][2], null, 2)
// console.log("Fighters: \n", data)
// console.log(data["fighters"][1])

fs.writeFile('spinal.txt', fighterWeWantToWrite, (err) => {
    if (err) {
        console.log(err)
    }
})
