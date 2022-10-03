/* Este metodo es mutable */

const months = ['March', 'Jan', 'Abril', 'Feb', 'Dec'];
/* Ordenamiento por ASCII */
months.sort();
console.log('months', months);

const numbers = [1, 30, 4, 21, 100000];
/* Ordenamiento por ASCII */
numbers.sort();
console.log('numbers', numbers);
/* Ordenamiento de Mayor a Menor */
numbers.sort((a, b) => b - a);
/* Ordenamiento de Menor a Mayor */
console.log('numbers', numbers);
numbers.sort((a, b) => a - b);
console.log('numbers', numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
/* Ordenamiento por ASCII */
words.sort();
console.log('words', words);
/* Ordenamiento por ASCII */
words.sort((a, b) => a.localeCompare(b));
/* Ordenamiento por ASCII - Invertido*/
words.sort((a, b) => b.localeCompare(a));
console.log('words', words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];


/* Ordenamiento de Mayor a Menor */
orders.sort((a, b) => b.total - a.total);
console.log('orders', orders);
/* Ordenamiento de Menor a Mayor */
orders.sort((a, b) => a.total - b.total);
console.log('orders', orders);