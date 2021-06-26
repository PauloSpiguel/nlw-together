import { Router } from "express";
import { tagsRoutes } from "./modules/Tags/routes/tags.routes";
import { usersRoutes } from "./modules/Users/routes/users.routes";
import { authenticateRoutes } from "./modules/Users/routes/authenticateRoutes.routes";
import { complimentsRoutes } from "./modules/Compliments/routes/compliments.routes";
import { complimentsUserRoutes } from "./modules/Compliments/routes/complimentsUser.routes";

const routes = Router();

routes.use("/login", authenticateRoutes);
routes.use("/users", usersRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/compliments", complimentsRoutes);
routes.use("/compliments/users", complimentsUserRoutes);

export { routes };
