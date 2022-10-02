const numbers = [1, 30, 49, 29, 10, 13]

let res = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        res = element;
        break
    }
}

console.log('res', res);
const resDos = numbers.find(item => item === 30)
console.log('resDos', resDos);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

/* Retorna undefined si no ecuentra el elemento */
const resTres = products.find(item => item.id === '🍕')
console.log('resTres', resTres);

/* Retorna -1 si no encuentra el elemento */
const resCuatro = products.findIndex(item => item.id === '🍕')
console.log('resCuatro', resCuatro);
