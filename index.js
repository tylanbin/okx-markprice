const exp = require('express');
const axios = require('axios');
const app = exp();
const port = 3000;

async function getMarkPrice(instId) {
    try {
        let url = 'https://www.okx.com/api/v5/public/mark-price?instType=MARGIN';
        if (instId) {
            url += '&instId=' + instId;
        }
        const response = await axios.get(url, {
            /* proxy: {
                protocol: 'http',
                host: '127.0.0.1',
                port: 1081
            } */
        });
        if (instId) {
            return response.data.data[0].markPx;
        } else {
            return response.data.data;
        }
    } catch (error) {
        throw error;
    }
}

app.get('/', async (req, res) => {
    try {
        const btc = await getMarkPrice('BTC-USDT');
        const eth = await getMarkPrice('ETH-USDT');
        res.send({
            btc: btc,
            eth: eth
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/all', async (req, res) => {
    try {
        const all = await getMarkPrice();
        res.send(all);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`start at http://localhost:${port}`);
});
