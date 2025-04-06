// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    // cats.shift(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const cat = [...cats, name]
    return cat;
}
function prependCat(name) {
    const cat = [name, ...cats]
    return cat;
}

function removeLastCat() {
    const cat = cats.slice(0, cats.length - 1)
    return cat;
}

function removeFirstCat() {
    const cat = cats.slice(1, cats.length)
    return cat;
}

module.exports = {
    cats,
};
