import { Router } from "express";
import { ensureAdmin } from "../../../middlewares/ensureAdmin";

import { CreateTagController } from "../controllers/CreateTagController";
import { ListTagController } from "../controllers/ListTagController";

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

const tagsRoutes = Router();

tagsRoutes.post("/", ensureAdmin, createTagController.handle);
tagsRoutes.get("/", ensureAdmin, listTagController.handle);

export { tagsRoutes };
