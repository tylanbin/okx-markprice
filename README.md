# okx-markprice

Get mark price from okx.

## usage

```sh
npm install okx-markprice
# OR
yarn add okx-markprice
```

```javascript
const mp = require('okx-markprice');
async function main() {
    const btc = await mp.getMarkPrice('BTC-USDT');
    console.log(btc);
}
main();
```
