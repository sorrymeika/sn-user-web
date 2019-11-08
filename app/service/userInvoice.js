const { Service } = require("egg");

class UserInvoiceService extends Service {
    addInvoice(accountId, {
        isDefault,
        type,
        titleType,
        title,
        taxCode,
        phoneNo
    }) {
        return this.app.userRPC.invoke('userInvoice.addInvoice', [{
            accountId,
            isDefault,
            type,
            titleType,
            title,
            taxCode,
            phoneNo
        }]);
    }

    updateInvoice(accountId, {
        id,
        isDefault,
        type,
        titleType,
        title,
        taxCode,
        phoneNo
    }) {
        return this.app.userRPC.invoke('userInvoice.updateInvoice', [{
            id,
            accountId,
            isDefault,
            type,
            titleType,
            title,
            taxCode,
            phoneNo
        }]);
    }

    listInvoice(accountId) {
        return this.app.userRPC.invoke('userInvoice.listInvoice', [accountId]);
    }

    getDefaultInvoice(accountId) {
        return this.app.userRPC.invoke('userInvoice.getDefaultInvoice', [accountId]);
    }
}

module.exports = UserInvoiceService;