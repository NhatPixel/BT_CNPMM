"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configViewEngine = (app) => {
    // Thư mục chứa file tĩnh (css, js, images...)
    app.use(express_1.default.static("./src/public"));
    // Thiết lập view engine
    app.set("view engine", "ejs");
    // Thư mục chứa views
    app.set("views", "./src/views");
};
exports.default = configViewEngine;
