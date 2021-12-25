"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_connection_helper_1 = (0, tslib_1.__importDefault)(require("../infra/db/db-connection-helper"));
const app_1 = (0, tslib_1.__importDefault)(require("./config/app"));
const env_1 = (0, tslib_1.__importDefault)(require("./config/env"));
try {
    db_connection_helper_1.default.connect().then(() => {
        app_1.default.listen(env_1.default.port, () => console.log(`Server running at http://localhost:${env_1.default.port}`));
    });
}
catch (err) {
    throw new Error(err.message);
}
finally {
    db_connection_helper_1.default.disconnect();
}
//# sourceMappingURL=index.js.map