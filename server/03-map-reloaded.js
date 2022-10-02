const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

const res = orders.map(item => item.total)
console.log('res', res);
console.log('original', orders);

const resDos = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})
console.log('resDos', resDos);
console.log('original', orders);


/* Item es una copia de la referencia en memoria, va alterar la original */
const resTres = orders.map(item => {
    item.tax = .19
    return item
})
console.log('resTres', resTres);
console.log('original', orders);
