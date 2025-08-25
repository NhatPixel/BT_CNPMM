import express, { Application } from "express";
import bodyParser from "body-parser"; 
import viewEngine from "./config/viewEngine"; 
import initWebRoutes from "./route/web";
import connectDB from "./config/configdb";
import dotenv from "dotenv";

dotenv.config(); // gọi hàm config của dotenv để chạy lệnh process.env.PORT

const app: Application = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

const port: number = Number(process.env.PORT) || 6969; // tạo tham số port lấy từ .env

// chạy server
app.listen(port, () => {
  console.log(`Backend Nodejs is running on the port: ${port}`);
});
