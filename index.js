const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push('Ralph');
}

function destructivelyPrependCat(name) {
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newcats = cats.slice();
  newcats.push('Broom');
  return newcats;
}

function prependCat(name) {
  const newcats1 = ['Arnold', ...cats];
  return newcats1;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats1 = cats.slice(1);
  return newCats1;
}

// console.log(cats); // ["Milo", "Otis", "Garfield"]

// destructivelyAppendCat('Ralph');
// console.log(cats); // ["Milo", "Otis", "Garfield", "Ralph"]

// destructivelyPrependCat('Bob');
// console.log(cats); // ["Bob", "Milo", "Otis", "Garfield", "Ralph"]

// destructivelyRemoveLastCat();
// console.log(cats); // ["Bob", "Milo", "Otis", "Garfield"]

// destructivelyRemoveFirstCat();
// console.log(cats); // ["Milo", "Otis", "Garfield"]

// console.log(appendCat('Broom')); // ["Milo", "Otis", "Garfield", "Broom"]

// console.log(prependCat('Arnold')); // ["Arnold", "Milo", "Otis", "Garfield"]

// console.log(removeLastCat()); // ["Milo", "Otis"]

// console.log(removeFirstCat()); // ["Otis", "Garfield"]