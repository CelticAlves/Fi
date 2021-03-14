//1- ver o nome da currency 
//2 - ver o valor da currency 
//3 - guardar ambos num array 

// const currenciesCurrentPrice = [
//     { XRP: '1' },
//     { YFIN: '3' },
//     { YFLR: '2' },
//     { YUSD: '1' }
// ];

const currencies = [];


const getValueCurrency = document.querySelectorAll('[itemprop="name"]  a  span');

getValueCurrency.forEach(element => {
    const name = element.innerHTML;
    currencies.push({ [name]: '12' });
    console.log(name);
});

console.log(currencies);