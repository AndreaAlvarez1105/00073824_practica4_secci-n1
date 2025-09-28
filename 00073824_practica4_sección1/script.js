console.assert("Legolas" > "Gimli");

console.clear();

console.dir(window);

console.dirxml(document.body);

const marvel = ['Spiderman', 'Ironman', 'Thor', 'Capitan America', 'Lobezno'];

console.group('Superheroes de Marvel');
marvel.forEach(superhero => console.log((superhero)))
console.groupEnd();