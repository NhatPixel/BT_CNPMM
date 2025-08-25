import { Request, Response } from "express";
import { User } from "../models";
import * as CRUDService from "../services/CRUDService";

// Homepage
export const getHomePage = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send("Server Error");
  }
};

export const getAboutPage = (req: Request, res: Response) => {
  return res.render("test/about.ejs");
};

export const getCRUD = (req: Request, res: Response) => {
  return res.render("crud.ejs");
};

// CRUD: findAll
export const getFindAllCrud = async (req: Request, res: Response) => {
  const data = await CRUDService.getAllUser();
  return res.render("findAllUser.ejs", { datalist: data });
};

// CRUD: create
export const postCRUD = async (req: Request, res: Response) => {
  const message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Post crud to server");
};

// CRUD: edit
export const getEditCRUD = async (req: Request, res: Response) => {
  const userId = Number(req.query.id);
  if (userId) {
    const userData = await CRUDService.getUserInfoById(userId);
    return res.render("updateUser.ejs", { data: userData });
  } else {
    return res.send("Không lấy được id");
  }
};

// CRUD: update
export const putCRUD = async (req: Request, res: Response) => {
  const data = req.body;
  const updated = await CRUDService.updateUser(data);
  return res.render("findAllUser.ejs", { datalist: updated });
};

// CRUD: delete
export const deleteCRUD = async (req: Request, res: Response) => {
  const id = Number(req.query.id);
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("Deleted!!!!!!!!!!!");
  } else {
    return res.send("Not find user");
  }
};
