module.exports = app => {
    const { router, controller } = app;

    /**
     * 前台接口路由
     */

    // 用户登录
    router.post('/user/login', controller.user.login);
    // 用户登录
    router.post('/user/getUserInfo', controller.user.getUserInfo);

    // 用户地址
    router.post('/userAddress/addUserAddress', controller.userAddress.addUserAddress);
    router.post('/userAddress/updateUserAddress', controller.userAddress.updateUserAddress);
    router.post('/userAddress/listUserAddress', controller.userAddress.listUserAddress);
    router.post('/userAddress/getUserAddressById', controller.userAddress.getUserAddressById);
    router.post('/userAddress/getDefaultAddress', controller.userAddress.getDefaultAddress);

    // 用户发票
    router.post('/userInvoice/addInvoice', controller.userInvoice.addInvoice);
    router.post('/userInvoice/updateInvoice', controller.userInvoice.updateInvoice);
    router.post('/userInvoice/listInvoice', controller.userInvoice.listInvoice);
    router.post('/userInvoice/getDefaultInvoice', controller.userInvoice.getDefaultInvoice);

};