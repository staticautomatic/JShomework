let products = [{prod: 'Nesquik', price: 1200}, {prod: 'Nutella', price: 2360},
                {prod: 'Bread', price: 500}];
let newProducts = products.filter(obj => obj.price > 1000);

console.log(newProducts);