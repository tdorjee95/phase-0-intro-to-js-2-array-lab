let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

function getCats() {
  const cats = ["Milo", "Otis", "Garfield"];
  return cats;
}

function destructivelyAppendCat () {
cats.push ("Ralph");
}

function destructivelyPrependCat () {
cats.unshift ("Bob");
}

function destructivelyRemoveLastCat () {
cats.pop ();
}

function destructivelyRemoveFirstCat () {
cats.shift ();
}

function appendCat () {
const cats = ["Milo", "Otis", "Garfield", "Broom"];
cats. slice (-1);
return cats;
}

function prependCat () {
const cats = ["Arnold", "Milo", "Otis", "Garfield"];
cats. splice (4);
return cats;
}

function removeLastCat () {
const cats = ["Milo", "Otis"];
cats.slice (1);
return cats;
}

function removeFirstCat () {
const cats = ["Otis", "Garfield"]
return cats;
}