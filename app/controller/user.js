const { Controller } = require("egg");

class UserController extends Controller {
    async login() {
        const { ctx } = this;
        const payloadRule = {
            account: { type: 'string', required: true },
            verifyCode: { type: 'string', required: true },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const { account, verifyCode } = ctx.request.body;

        const result = await ctx.service.user.login(account, verifyCode);
        ctx.body = result;
    }

    async getUserInfo() {
        const { ctx } = this;
        const result = await ctx.service.user.getUserInfo(ctx.accountId);
        ctx.body = result;
    }

    test() {
        const { ctx } = this;
        ctx.body = {
            name: 'hello world!'
        };
    }
}

module.exports = UserController;