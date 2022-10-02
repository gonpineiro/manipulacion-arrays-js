const words = ['spay', 'limit', 'alite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArray.push(element)
    }
}

console.log('new', newArray);
console.log('original', words);

const newArrayFilter = words.filter(item => item.length >= 6)

console.log('new', newArrayFilter);
console.log('original', words);

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
    {
        customerName: "Nicolas",
        total: 24000,
        delivered: true,
    },
]

const res = orders.filter(item => item.delivered && item.total >= 100)

console.log('res', res);
console.log('original', orders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('a'));