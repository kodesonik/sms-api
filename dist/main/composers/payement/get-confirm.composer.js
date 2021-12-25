"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payement_1 = require("../../../domain/usecases/payement");
const data_1 = require("../../../infra/data");
const payement_2 = require("../../../presentation/controllers/payement");
class GetConfirmPayementComposer {
    static compose() {
        const payementDb = new data_1.PayementDb();
        const usecase = new payement_1.EditPayement(payementDb);
        return new payement_2.GetConfirmPayement(usecase);
    }
}
exports.default = GetConfirmPayementComposer;
//# sourceMappingURL=get-confirm.composer.js.map