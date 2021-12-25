"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payement_1 = require("../../../domain/usecases/payement");
const data_1 = require("../../../infra/data");
const payement_2 = require("../../../presentation/controllers/payement");
class PostPayementComposer {
    static compose() {
        const payementDb = new data_1.PayementDb();
        const usecase = new payement_1.AddPayement(payementDb);
        return new payement_2.PostPayement(usecase);
    }
}
exports.default = PostPayementComposer;
//# sourceMappingURL=post-composer.js.map