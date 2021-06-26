import { Router } from "express";
import { CreateComplimentController } from "../controllers/CreateComplimentController";

import { ensureAdmin } from "../../../middlewares/ensureAdmin";
import { checkAuthenticateUser } from "../../../middlewares/checkAuthenticateUser";

const createComplimentController = new CreateComplimentController();

const complimentsRoutes = Router();

complimentsRoutes.post(
  "/",
  checkAuthenticateUser,
  ensureAdmin,
  createComplimentController.handle
);

export { complimentsRoutes };
