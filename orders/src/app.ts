import express from "express";
import "express-async-errors";

import { NotFoundError, currentUser, errorHandler } from "@bjftickets/commom";

import cookieSession from "cookie-session";
import { indexOrderRouter } from "./routes";
import { showOrderRouter } from "./routes/show";
import { newOrderRouter } from "./routes/new";
import { deleteOrderRouter } from "./routes/delete";

const app = express();

app.set("trust proxy", true);

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(newOrderRouter);
app.use(deleteOrderRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
