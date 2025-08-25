"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCRUD = exports.putCRUD = exports.getEditCRUD = exports.postCRUD = exports.getFindAllCrud = exports.getCRUD = exports.getAboutPage = exports.getHomePage = void 0;
const models_1 = require("../models");
const CRUDService = __importStar(require("../services/CRUDService"));
// Homepage
const getHomePage = async (req, res) => {
    try {
        const data = await models_1.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data),
        });
    }
    catch (e) {
        console.error(e);
        return res.status(500).send("Server Error");
    }
};
exports.getHomePage = getHomePage;
const getAboutPage = (req, res) => {
    return res.render("test/about.ejs");
};
exports.getAboutPage = getAboutPage;
const getCRUD = (req, res) => {
    return res.render("crud.ejs");
};
exports.getCRUD = getCRUD;
// CRUD: findAll
const getFindAllCrud = async (req, res) => {
    const data = await CRUDService.getAllUser();
    return res.render("findAllUser.ejs", { datalist: data });
};
exports.getFindAllCrud = getFindAllCrud;
// CRUD: create
const postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("Post crud to server");
};
exports.postCRUD = postCRUD;
// CRUD: edit
const getEditCRUD = async (req, res) => {
    const userId = Number(req.query.id);
    if (userId) {
        const userData = await CRUDService.getUserInfoById(userId);
        return res.render("updateUser.ejs", { data: userData });
    }
    else {
        return res.send("Không lấy được id");
    }
};
exports.getEditCRUD = getEditCRUD;
// CRUD: update
const putCRUD = async (req, res) => {
    const data = req.body;
    const updated = await CRUDService.updateUser(data);
    return res.render("findAllUser.ejs", { datalist: updated });
};
exports.putCRUD = putCRUD;
// CRUD: delete
const deleteCRUD = async (req, res) => {
    const id = Number(req.query.id);
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send("Deleted!!!!!!!!!!!");
    }
    else {
        return res.send("Not find user");
    }
};
exports.deleteCRUD = deleteCRUD;
