import express, { Application, Request, Response } from "express";
import { SupportedWorlds } from "./SupportedWorlds";

const app: Application = express();

app.get("/supported-worlds", (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(3001, function () {
  console.log(`App is running!`);
});
