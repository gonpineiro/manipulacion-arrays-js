const elements = ["fire", "Air", "Water"];

let res = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    res += element + separator;
}

console.log('res', res);
const resDos = elements.join(separator);
console.log('resDos', resDos);

const title = "Titulo manipulacion de arrays";
const resTres = title.split(' ')
const resCuatro = title.split(' ').join(separator)

console.log('resTres', resTres);
console.log('resCuatro', resCuatro);