import { Router } from "express";
import { CreateUserController } from "./modules/Users/controllers/CreateUserController";
import { CreateTagController } from "./modules/Tags/controllers/CreateTagController";
import { tagsRoutes } from "./modules/Tags/routes/tagsRoutes";

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);
router.use("/tags", tagsRoutes);

export { router };
