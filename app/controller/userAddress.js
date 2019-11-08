const { Controller } = require("egg");

class UserAddressController extends Controller {
    async addUserAddress() {
        const { ctx } = this;
        const payloadRule = {
            isDefaultAddress: { type: 'boolean', required: true },
            receiver: { type: 'string', required: true },
            phoneNo: { type: 'string', required: true },
            provinceCode: { type: 'string', required: true },
            cityCode: { type: 'string', required: true },
            districtCode: { type: 'string', required: true },
            detail: { type: 'string', required: true },
            tag: { type: 'string', required: false },
            latitude: { type: 'number', required: false },
            longitude: { type: 'number', required: false },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const result = await ctx.service.userAddress.addUserAddress(ctx.accountId, ctx.request.body);
        ctx.body = result;
    }

    async updateUserAddress() {
        const { ctx } = this;
        const payloadRule = {
            id: { type: 'number', required: true },
            isDefaultAddress: { type: 'boolean', required: true },
            receiver: { type: 'string', required: true },
            phoneNo: { type: 'string', required: true },
            provinceCode: { type: 'string', required: true },
            cityCode: { type: 'string', required: true },
            districtCode: { type: 'string', required: true },
            detail: { type: 'string', required: true },
            tag: { type: 'string', required: false },
            latitude: { type: 'number', required: false },
            longitude: { type: 'number', required: false },
        };
        ctx.validate(payloadRule);

        const result = await ctx.service.userAddress.updateUserAddress(ctx.accountId, ctx.request.body);
        ctx.body = result;
    }

    async listUserAddress() {
        const { ctx } = this;
        const result = await ctx.service.userAddress.listUserAddress(ctx.accountId);
        ctx.body = result;
    }

    async getUserAddressById() {
        const { ctx } = this;
        const payloadRule = {
            addressId: { type: 'number', required: true },
        };
        ctx.validate(payloadRule);

        const result = await ctx.service.userAddress.getUserAddressById(ctx.request.body.addressId, ctx.accountId);
        ctx.body = result;
    }

    async getDefaultAddress() {
        const { ctx } = this;
        const result = await ctx.service.userAddress.getDefaultAddress(ctx.accountId);
        ctx.body = result;
    }
}

module.exports = UserAddressController;