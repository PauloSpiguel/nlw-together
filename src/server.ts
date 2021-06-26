import express from "express";

import { exceptionError } from "./middlewares/exceptionError";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(exceptionError);

app.listen(3333, () => {
  console.log("Server is running on port 3333!");
});
