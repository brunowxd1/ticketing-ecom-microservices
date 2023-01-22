import express from "express";
import "express-async-errors";
import mongoose from "mongoose";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

    console.log("Connected to MongoDb!");
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log("Auth Service running!");
  });
};

start();
