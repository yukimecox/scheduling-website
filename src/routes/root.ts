import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", (_request: Request, response: Response) => {
  response.render("home");
});

export default router;