/* Map es inmutable, no modifica el array original, 
retorna un nuevo array modificado, va retornar 
la misma cantidad de elementos que tiene el arreglo 
original */

const letters = ['a', 'b', 'c', 'd'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];

    /* Realizamos la transformacion */
    newArray.push(element + '++')
}
console.log('original', letters);
console.log('new', newArray);

console.log('newConMap', letters.map(item => item + '++')) 