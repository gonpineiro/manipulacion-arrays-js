const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element;
}

console.log('total', sum);

const res = totals.reduce((sum, element) => sum + element, 0)
console.log('total', res);