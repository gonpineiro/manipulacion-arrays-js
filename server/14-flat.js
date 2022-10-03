const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [2, 3]]],
    [7, 8, 9],
]

const newArray = []

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];

    for (let j = 0; j < array.length; j++) {
        const item = matriz[i][j];
        newArray.push(item)
    }
}
console.log('newArray', newArray);
const res = matriz.flat(Infinity);
console.log('res', res);

