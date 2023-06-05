"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Blog_1 = __importDefault(require("./Routers/Blog"));
const connect_1 = __importDefault(require("./DB/connect"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true }));
connect_1.default;
app.use(express_1.default.json()); //allows parsing incoming request to json
app.use(Blog_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});
