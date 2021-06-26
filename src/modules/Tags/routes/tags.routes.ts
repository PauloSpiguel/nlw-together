import { Router } from "express";
import { ensureAdmin } from "../../../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";

import { CreateTagController } from "../controllers/CreateTagController";
import { ListTagController } from "../controllers/ListTagController";

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

const tagsRoutes = Router();

tagsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
tagsRoutes.get("/", ensureAuthenticated, ensureAdmin, listTagController.handle);

export { tagsRoutes };
