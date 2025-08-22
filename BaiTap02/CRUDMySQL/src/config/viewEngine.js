import express from "express"; // cú pháp khác: var express = require('express');

// javascript theo ES6
let configViewEngine = (app) => {
  // Thiết lập thư mục tĩnh chứa images, css, js...
  app.use(express.static("./src/public"));

  // Thiết lập view engine
  app.set("view engine", "ejs");

  // Thư mục chứa views
  app.set("views", "./src/views");
};

export default configViewEngine; // xuất hàm ra để dùng ở file khác
