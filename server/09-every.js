/* evalua que todos los elementos cumplan con cierta condicion */

const numbers = [1, 30, 49, 29, 10, 13]

let res = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        res = false;
    }
}

console.log('res', res);
const resDos = numbers.every(item => item <= 40)
console.log('resDos', resDos);

const team = [
    {
        name: 'Nicolas',
        age: 12
    },
    {
        name: 'Nicolas',
        age: 8
    },
    {
        name: 'Nicolas',
        age: 2
    },
    {
        name: 'Nicolas',
        age: 18
    },
]

const admite = team.every(person => person.age >= 15)
console.log('admite', admite);
