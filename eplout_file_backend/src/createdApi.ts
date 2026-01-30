import express from "express";
import cors from "cors";
import userPouter from "./routers/users.router";
export const createApi = () => {
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use("/upload", express.static("src/uploads"));
  app.use("/users", userPouter);
  return app;
};
