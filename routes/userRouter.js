import express from "express";
import { home, addUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", home);

router.post("/usuario", addUser);

router.get("/usuarios", getUsers);

router.get("*", (req, res) => {
  res.send("404 - page not found");
});

export default router;
