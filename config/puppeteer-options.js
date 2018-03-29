module.exports = {
    // headless: false,
    // dumpio: true,
    slowMo: 100,
    timeout: 20000,
    ignoreHTTPSErrors: true,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
    ]
};