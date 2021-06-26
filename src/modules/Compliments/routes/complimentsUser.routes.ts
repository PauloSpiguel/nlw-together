import { Router } from "express";

import { ListUserReceiveComplimentsController } from "../controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "../controllers/ListUserSendComplimentsController";

import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";

const listUserReceiveController = new ListUserReceiveComplimentsController();
const listUserSendController = new ListUserSendComplimentsController();

const complimentsUserRoutes = Router();

complimentsUserRoutes.get(
  "/send",
  ensureAuthenticated,
  listUserSendController.handle
);

complimentsUserRoutes.get(
  "/receive",
  ensureAuthenticated,
  listUserReceiveController.handle
);

export { complimentsUserRoutes };
