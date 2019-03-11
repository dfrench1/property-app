let uri;
if (process.env.NODE_ENV === 'production') {
    uri = process.env.PROD_DB
} else {
    uri = process.env.DEV_DB
}

module.exports = { uri }
