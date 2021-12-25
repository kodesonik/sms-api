"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpressRenderAdapter {
    static render(path) {
        return (req, res) => {
            res.type('html');
            res.render(path, { title: 'accueil' });
        };
    }
}
exports.default = ExpressRenderAdapter;
//# sourceMappingURL=express-render-adapter.js.map