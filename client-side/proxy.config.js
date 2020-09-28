const PROXY_CONFIG = [
    {
        context: ['/api'],
        target : `http://localhost/server-side`,
        secure: true,
        loglevel: 'debug',
        pathRewrite: { '^/api' : '' }
    }
];

module.exports = PROXY_CONFIG;