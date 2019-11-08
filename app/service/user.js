const { Service } = require("egg");

class UserService extends Service {
    async login(account, verifyCode) {
        const { ctx } = this;
        const res = await this.ctx.authRPC.invoke('auth.loginByVerifyCode', [account, verifyCode, 3]);

        const { success, token, wtk } = res;
        console.log('login result:', res);
        if (success) {
            ctx.cookies.set('tk', token, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
            ctx.cookies.set('aid', res.accountId, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
            ctx.cookies.set('wtk', wtk, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: false,
                signed: false
            });
            delete res.token;
        }

        return res;
    }

    getUserInfo(accountId) {
        return this.app.userRPC.invoke('user.getUserInfo', [accountId]);
    }
}

module.exports = UserService;