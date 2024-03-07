const mp = require('./index');

async function main() {
    const btc = await mp.getMarkPrice('BTC-USDT');
    console.log(btc);
}

main();
