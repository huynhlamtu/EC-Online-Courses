let controller = {};
let models = require('../models');

let Bill = models.Bill;

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let bill;
        Bill
            .findOne({
                where: { id: id },
                include: [{ model: models.User }]
            })
            .then(result => {
                bill = result;
                return models.BillDetail.findAll({
                    where: { billId: id },
                    include: [{ model: models.Product }]
                });
            })
            .then(BillDetails => {
                bill.BillDetails = BillDetails;
                resolve(bill);
            })
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;