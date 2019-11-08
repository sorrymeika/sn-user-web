const { Service } = require("egg");

class UserAddressService extends Service {
    addUserAddress(accountId, {
        isDefaultAddress,
        receiver,
        phoneCountryCode,
        phoneNo,
        provinceCode,
        cityCode,
        districtCode,
        detail,
        tag,
        latitude,
        longitude
    }) {
        return this.app.userRPC.invoke('userAddress.addUserAddress', [{
            accountId,
            isDefaultAddress,
            receiver,
            phoneCountryCode,
            phoneNo,
            provinceCode,
            cityCode,
            districtCode,
            detail,
            tag,
            latitude,
            longitude
        }]);
    }

    updateUserAddress(accountId, {
        id,
        isDefaultAddress,
        receiver,
        phoneCountryCode,
        phoneNo,
        provinceCode,
        cityCode,
        districtCode,
        detail,
        tag,
        latitude,
        longitude
    }) {
        return this.app.userRPC.invoke('userAddress.updateUserAddress', [{
            id,
            accountId,
            isDefaultAddress,
            receiver,
            phoneCountryCode,
            phoneNo,
            provinceCode,
            cityCode,
            districtCode,
            detail,
            tag,
            latitude,
            longitude
        }]);
    }

    listUserAddress(accountId) {
        return this.app.userRPC.invoke('userAddress.listUserAddress', [accountId]);
    }

    getDefaultAddress(accountId) {
        return this.app.userRPC.invoke('userAddress.getDefaultAddress', [accountId]);
    }

    getUserAddressById(addressId, accountId) {
        return this.app.userRPC.invoke('userAddress.getUserAddressById', [addressId, accountId]);
    }
}

module.exports = UserAddressService;