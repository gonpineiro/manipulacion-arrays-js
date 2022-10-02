const pets = ['cat', 'dog', 'bat']

let res = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        res = true;
        break;
    }
}

console.log('res', res);

const resDos = pets.includes('dog')
console.log('resDos', resDos);