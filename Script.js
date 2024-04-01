const  valuesObj = {
    Ashwin: 'Western Cape',
    Sibongile: 'Gauteng',
    'Jan-Hendrik': 'Northern Cape',
    Sifso: 'Eastern Cape',
    Shailen: 'KwaZulu-Natal',
    Frikkie: 'Free State'
  };


console.log('\nQ1 \n');
// console log each name to the console
Object.keys(valuesObj).forEach(name => {
    console.log(name);
});

console.log('\nQ2\n');
//console log each name with a matching province.

Object.entries(valuesObj).forEach(([name, province]) => {
    console.log(`${name} (${province})`);
  });


console.log('\nQ3\n');
// Loop over all province names and turn the string to all uppercase.
const provincesUppercase = Object.values(valuesObj).map(province => province.toUpperCase());
console.log(provincesUppercase.join(',\n'));


console.log('\nQ4\n');
//Create a new array that has the amount of characters in each name
const nameLengths = Object.keys(valuesObj).map(name => name.length);
console.log(nameLengths);

console.log('\nQ5\n');
//sort all provinces alphabetically.
//Creates a custom method toSorted since JavaScript doesn't have a built-in toSorted() method 
Array.prototype.toSorted = function() {
    return this.sort();
};
const sortedProvinces = Object.values(valuesObj).toSorted();
console.log(sortedProvinces.join(',\n'));

console.log('\nQ6\n');
// determine whether a name contains an S character
const containsS = Object.keys(valuesObj).map(name => [...name].some(char => char.toLowerCase() === 's'));
console.log(containsS);

console.log('\nQ7\n');
//turn into an object that indicates the province of an individual.
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

const provinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(provinceObject);

//part 2
console.log('\npart 2\n')

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

console.log('\nQ8\n');
//Use forEach to console.log each product name to the console.
console.log(products.forEach(item => console.log(item.product)));

console.log('\nQ9\n');
//filter out products that have a name longer than 5 characters
console.log(products.filter(item => item.product.length <= 5).map(item => item.product));

console.log('\nQ10\n');  
//Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.
console.log(
    products.reduce((acc, { price }) => {
        const parsedPrice = parseInt(price);
        return !isNaN(parsedPrice) ? acc + parsedPrice : acc;
    }, 0)
    )
console.log('\nQ11\n');
//concatenate all product names to create the following string
console.log(products.reduce((acc, curr, index, array) => {
    if (index === array.length - 1) {
        return acc + 'and ' + curr.product;
    } else if (index === array.length - 2) {
        return acc + curr.product + ' ';
    } else {
        return acc + curr.product + ', ';
    }
}, ''));
//alternatively we could have used  regular expression:
//console.log(products.map(product => product.product).join(', ').replace(/,([^,]*)$/, ' and$1'));

console.log('\nQ12\n');
//Use reduce to calculate both the highest and lowest-priced items
console.log(`Highest: ${products.reduce((acc, curr) => {
    const price = parseInt(curr.price);
    if (!isNaN(price)) {
        if (acc.highest === null || price > acc.highest.price) {
            acc.highest = { product: curr.product, price: price };
        }
    }
    return acc;
}, { highest: null, lowest: null }).highest.product}. Lowest: ${products.reduce((acc, curr) => {
    const price = parseInt(curr.price);
    if (!isNaN(price)) {
        if (acc.lowest === null || price < acc.lowest.price) {
            acc.lowest = { product: curr.product, price: price };
        }
    }
    return acc;
}, { lowest: null }).lowest.product}`);

console.log('\nQ13\n');
//recreate the object with the exact same values, however product should be changed to name and price should be changed to cost
console.log(products.reduce((acc, curr) => {
    const newEntry = Object.entries(curr).reduce((newObj, [key, value]) => {
        if (key === 'product') {
            newObj['name'] = value;
        } else if (key === 'price') {
            newObj['cost'] = value;
        } else {
            newObj[key] = value;
        }
        return newObj;
    }, {});
    acc.push(newEntry);
    return acc;
}, []));
console.log('\nFin\n');

