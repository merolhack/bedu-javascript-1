'use strict';

// Array that contains objects
const coinsValues = [
    {
        name: 'Bitcoin',
        price: 6000.30,
    },
    {
        name: 'Ethereum',
        price: 452.26,
    },
    {
        name: 'EOS',
        price: 666.88,
    },
    {
        name: 'Bitcoin Cash / BCC',
        price: 332.23,
    },
    {
        name: 'Litecoin',
        price: 876.67,
    }
];

const formatCurrency = function(value) {
    return '$ ' + value;
};

// Loop the object of variables
const fillTable = function(values) {
    const coins = document.getElementById('coins');
    coins.innerHTML = '';
    for (let coin in values) {
        const element = document.createElement('tr');
        const content = `<td>${values[coin].name}</td>
            <td>${formatCurrency(values[coin].price)}</td>`;
        element.innerHTML = content;
        coins.appendChild(element);
    }
}

const submitForm = function() {
    const usdElement = document.getElementById('usd');
    console.log(parseFloat(usdElement.value));
    for (let key in coinsValues) {
        const final = coinsValues[key].price * parseFloat(usdElement.value);
        console.log(final);
        coinsValues[key].price = final;
        console.log(coinsValues[key].price);
    }
    fillTable(coinsValues);
};
// Refresh the table
submitForm();

// Check the entered character
const btnRefreshElement = document.getElementById('refresh');
btnRefreshElement.addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();    
});
