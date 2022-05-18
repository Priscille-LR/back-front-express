const email = process.env.EMAIL
const password = process.env.PASSWORD

const axios = require('axios');
const headers = require('../config/config')

module.exports = async (req, res, next) => {
    try {
        const response = await axios.post('https://api.bridgeapi.io/v2/authenticate', {
            "email": email,
            "password": password
        }, {
            headers: headers
        })
        const token = response.data.access_token

        if (!token) {
            throw 'utilisateur non identifié'
        } else {
            req.authToken = token
            next()
        }

    } catch (error) {
        res.status(401).json({ error: error | 'requete non authentifiée' })
    }
}