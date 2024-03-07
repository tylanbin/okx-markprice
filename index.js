const axios = require('axios');

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

module.exports.getMarkPrice = getMarkPrice;
