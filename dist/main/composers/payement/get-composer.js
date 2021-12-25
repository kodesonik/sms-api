"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payement_1 = require("../../../domain/usecases/payement");
const data_1 = require("../../../infra/data");
const payement_2 = require("../../../presentation/controllers/payement");
class GetPayementsComposer {
    static compose() {
        const payementDb = new data_1.PayementDb();
        const usecase = new payement_1.ListPayements(payementDb);
        return new payement_2.GetPayements(usecase);
    }
}
exports.default = GetPayementsComposer;
//# sourceMappingURL=get-composer.js.map