const { Controller } = require("egg");

class UserInvoiceController extends Controller {
    async addInvoice() {
        const { ctx } = this;
        const payloadRule = {
            isDefault: { type: 'boolean', required: false },
            type: { type: 'number', required: true },
            titleType: { type: 'number', required: true },
            title: { type: 'string', required: true },
            taxCode: { type: 'string', required: false },
            phoneNo: { type: 'string', required: false }
        };
        // 校验参数
        ctx.validate(payloadRule);

        const result = await ctx.service.userInvoice.addInvoice(ctx.accountId, ctx.request.body);
        ctx.body = result;
    }

    async updateInvoice() {
        const { ctx } = this;
        const payloadRule = {
            id: { type: 'number', required: true },
            isDefault: { type: 'boolean', required: false },
            type: { type: 'number', required: true },
            titleType: { type: 'number', required: true },
            title: { type: 'string', required: true },
            taxCode: { type: 'string', required: false },
            phoneNo: { type: 'string', required: false }
        };
        ctx.validate(payloadRule);

        const result = await ctx.service.userInvoice.updateInvoice(ctx.accountId, ctx.request.body);
        ctx.body = result;
    }

    async listInvoice() {
        const { ctx } = this;
        const result = await ctx.service.userInvoice.listInvoice(ctx.accountId);
        ctx.body = result;
    }

    async getDefaultInvoice() {
        const { ctx } = this;
        const result = await ctx.service.userInvoice.getDefaultInvoice(ctx.accountId);
        ctx.body = result;
    }
}

module.exports = UserInvoiceController;