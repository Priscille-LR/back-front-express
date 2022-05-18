const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const headers = {
    'Bridge-Version': '2021-06-01',
    'Content-Type': 'application/json',
    'Client-Id': clientId,
    'Client-Secret': clientSecret,
}

module.exports = headers
