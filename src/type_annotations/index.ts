// an example function demonstration type annotations
function getFruitBasketVerbalCount(fruitList:string[]) {
    let verbalFruitCount:string;
    if (fruitList.length > 5) {
        verbalFruitCount = "A lot of fruit";
    } else {
        verbalFruitCount = "Some fruit.";
    }
    return verbalFruitCount;
}

// traditionally, you can't use a value that hasn't been used.
// If you use that variable that is declared by never used
// TS will alert this .
let numberOfGuest: number;
console.log(numberOfGuest)

// non-null assertions are used to override the default
// behaviour of TS and just let us use it.
// This is dangerous behaviour as it can result in type
// mismatches.
let numberOfGuestV2!: number;
console.log(numberOfGuestV2)

// this is very much like a structs in its definition. 
// You can define an object with types. 
// This sets up any future implementations
// of menu with the correct types.
let menu: {
    courses: number,
    veganOption: boolean,
    drinkChoices: string[],
} = {
    courses: 3,
    veganOption: true,
    drinkChoices: []
}

// This is VERY tricky. To destructure you first provide
// the TYPE of the property being destructured and then
// the actual variable assignment of the property being
// destructured

let { courses: extractCourses } = menu


// we can replace variables that have any 'undefined' any type
// to a concrete type that is specified by an annotation.
async function getFruitList() {
    const response = await fetch("https://127.0.0.1/fruitList")
    const fruitList:string[] = await response.json();
    return fruitList;
}