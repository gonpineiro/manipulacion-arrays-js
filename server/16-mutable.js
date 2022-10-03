const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

/* Buscamos el indice del producto */
const productIndex = products.findIndex(item => item.id === "🍔")

if (productIndex !== -1) {
    myProducts.push(products[productIndex])
    products.splice(productIndex, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

/* Hacer un Update */
const productsDos = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productDosIndex = productsDos.findIndex(item => item.id === update.id)
productsDos[productDosIndex] = {
    ...productsDos[productDosIndex],
    ...update.changes
}

console.log("productsDos", productsDos);
console.log("-".repeat(10));