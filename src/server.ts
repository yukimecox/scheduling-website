import * as path from "path";

import express from "express";

import dotenv from "dotenv";
dotenv.config();

import * as routes from "./routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

app.use("/", routes.root);

app.listen(PORT, () => {
  console.log(`Listening from http://localhost:${PORT}`);
});