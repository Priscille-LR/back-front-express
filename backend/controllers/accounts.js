const axios = require('axios');
const mapper = require('../mappers/accounts')
const headers = require('../config/config')

exports.getAccounts = async (req, res, next) => {
    const config = {
        headers: { ...headers, 'Authorization': 'Bearer ' + req.authToken },
        params: {
            limit: 10
        }
    };

    try {
        const response = await axios.get('https://api.bridgeapi.io/v2/accounts', config);
        const formattedAccounts = mapper.formatAccounts(response)
        res.status(200).json(mapper.formatResponse(formattedAccounts))

    } catch (error) {
        res.status(400).json({ error: error | 'comptes non trouvés' })
    }
}

