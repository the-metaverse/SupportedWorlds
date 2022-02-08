import express, { Application, Request, Response } from "express";
import { SupportedWorlds } from "./SupportedWorlds";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(process.env.PORT || 5000, function () {
  console.log(`App is running!`);
});
