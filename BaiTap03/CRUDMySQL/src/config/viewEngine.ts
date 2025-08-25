import express, { Application } from "express";

const configViewEngine = (app: Application): void => {
  // Thư mục chứa file tĩnh (css, js, images...)
  app.use(express.static("./src/public"));

  // Thiết lập view engine
  app.set("view engine", "ejs");

  // Thư mục chứa views
  app.set("views", "./src/views");
};

export default configViewEngine;
