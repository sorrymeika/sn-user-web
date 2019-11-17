exports.mysql = {
    // 单数据库信息配置
    client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'dev',
        // 密码
        password: '12345Qwert_',
        // 数据库名
        database: 'sn_user',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};

exports.keys = 'my-cookie-secret-key';

exports.logger = {
    level: 'INFO',
    dir: '/data/logs/sn-user-web'
};

exports.security = {
    domainWhiteList: ['http://www.big1024.com', 'http://admin.big1024.com'],
    csrf: {
        enable: false
    }
};

/**
 * CORS middleware
 *
 * @param {Object} [options]
 *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header
 *  - {String|Array} allowMethods `Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'
 *  - {String|Array} exposeHeaders `Access-Control-Expose-Headers`
 *  - {String|Array} allowHeaders `Access-Control-Allow-Headers`
 *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
 *  - {Boolean} credentials `Access-Control-Allow-Credentials`
 *  - {Boolean} keepHeadersOnError Add set headers to `err.header` if an error is thrown
 * @return {Function} cors middleware
 * @api public
 */
exports.cors = {
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
};

// exports.middleware = ['gzip'];
// exports.gzip = {
//     threshold: 2048,
// };

exports.auth = {
    registry: {
        port: 3006
    },
    permissions: require('./permissions'),
};

