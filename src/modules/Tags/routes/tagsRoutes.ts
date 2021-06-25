import { Router } from "express";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../../../middlewares/ensureAdmin";

const createTagController = new CreateTagController();

const tagsRoutes = Router();

tagsRoutes.post("/", ensureAdmin, createTagController.handle);

export { tagsRoutes };
