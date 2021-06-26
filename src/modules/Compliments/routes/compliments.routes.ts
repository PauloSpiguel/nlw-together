import { Router } from "express";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "../controllers/ListUserSendComplimentsController";

import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";

const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();

const complimentsRoutes = Router();

complimentsRoutes.post(
  "/",
  ensureAuthenticated,
  createComplimentController.handle
);

complimentsRoutes.get(
  "/",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

export { complimentsRoutes };
