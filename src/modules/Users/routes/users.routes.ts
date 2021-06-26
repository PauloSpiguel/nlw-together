import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUserController.handle);

export { usersRoutes };
