const getMarkPrice = require('./index.js').getMarkPrice;
const exp = require('express');
const app = exp();

async function main() {
    const btc = await getMarkPrice('BTC-USDT');
    console.log(btc);
}

main();
