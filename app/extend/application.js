const { registerConsumer } = require('sonorpc');

const userRPC = registerConsumer({
    // 服务提供者名称
    providerName: 'user',
    registry: {
        port: 3006
    }
});

module.exports = {
    get userRPC() {
        return userRPC;
    },
};