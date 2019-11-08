module.exports = [

    /**
     * 前台接口权限
     */

    // 用户信息
    {
        url: '/user/getUserInfo',
        apps: [3],
    },

    // 用户配送地址
    {
        url: '/userAddress/addUserAddress',
        apps: [3],
    }, {
        url: '/userAddress/updateUserAddress',
        apps: [3],
    }, {
        url: '/userAddress/listUserAddress',
        apps: [3],
    }, {
        url: '/userAddress/getUserAddressById',
        apps: [3],
    }, {
        url: '/userAddress/getDefaultAddress',
        apps: [3],
    },

    // 用户发票
    {
        url: '/userInvoice/addInvoice',
        apps: [3],
    }, {
        url: '/userInvoice/updateInvoice',
        apps: [3],
    }, {
        url: '/userInvoice/listInvoice',
        apps: [3],
    }, {
        url: '/userInvoice/getDefaultInvoice',
        apps: [3],
    },
];