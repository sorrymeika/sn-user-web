const { Service } = require("egg");

class UserService extends Service {
    async login(account, verifyCode) {
        const { ctx } = this;
        const res = await this.app.authRPC.invoke('auth.loginByVerifyCode', [account, verifyCode, 3]);

        const { success, token, wtk } = res;
        if (success) {
            const cookieOptions = {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            };
            if (!/^(\d+\.\d+\.\d+\.\d+|localhost)$/.test(ctx.request.hostname)) {
                const parts = ctx.request.hostname.split('.');
                cookieOptions.domain = parts.slice(ctx.request.hostname.endsWith('.com.cn') ? -3 : -2).join('.');
            }

            ctx.cookies.set('tk', token, cookieOptions);
            ctx.cookies.set('aid', res.accountId, cookieOptions);
            ctx.cookies.set('wtk', wtk, cookieOptions);
            delete res.token;
        }

        return res;
    }

    getUserInfo(accountId) {
        return this.app.userRPC.invoke('user.getUserInfo', [accountId]);
    }
}

module.exports = UserService;