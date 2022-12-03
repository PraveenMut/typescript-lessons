// TS is able to infer the type of the variable due to its assignment
let fruitName = "Banana";

// TS recognises that there is a type mismatch
fruitName = 25

// other type demonstrates
let numberOfFruit = 25
let isAppleSeason = true

// an example of an object with the types being automatically inferred
let fruit = { 
    name: "Banana",
    colour: "Yellow",
    sweetness: 90,
    isRipe: true,
}


// type inference works on both . methods and obj destructuring
let banaName = fruit.name;
let {sweetness} = fruit


// lets make an Array, which TS has inferred as an Array of Strings
// i.e. string[]
let fruitNames = ["Apple", "Banana"]

// TS is able to make inferences on callback functions if it's passed
// directly into the method call of a type, e.g. a map.
const alternatedFruitNames = fruitNames.map((name, index) => {
    if (index % 2 == 0) {
        return name.toUpperCase();
    }
    return name;
})

// However TS is unable to discern the types as now the function
// has detached as a parameter is now unable to infer with confidence
// what the function is doing.
function alternateUppercase(name, index) {
    if (index % 2 == 0) {
        return name.toUpperCase();
    }
}

// This is demonstrated as now the callback is an any parameter.
const alternateFruitNamesCustomCallback = fruitNames.map(alternateUppercase) 
