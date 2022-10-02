const items = [1, 3, 2, 3]

const res = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(res);

const data = [
    {
        customerName: "Nicolas",
        level: 'low'
    },
    {
        customerName: "Zulema",
        level: 'low'
    },
    {
        customerName: "Santiago",
        level: 'medium'
    },
    {
        customerName: "Valentina",
        level: 'hight'
    },
    {
        customerName: "Santiago",
        level: 'medium'
    },
    {
        customerName: "Valentina",
        level: 'hight'
    },
    {
        customerName: "Zulema",
        level: 'low'
    },
    {
        customerName: "Zulema",
        level: 'low'
    },
    {
        customerName: "Valentina",
        level: 'hight'
    },
    {
        customerName: "Santiago",
        level: 'medium'
    },
    {
        customerName: "Valentina",
        level: 'hight'
    },
]

const resDos = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1
        }
        return obj
    }, {})

console.log(resDos);