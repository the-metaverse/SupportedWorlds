import express, { Application, Request, Response } from "express";
import { SupportedWorlds } from "./SupportedWorlds";
import cors from "cors";

const app: Application = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(process.env.PORT || 5000, function () {
  console.log(`App is running!`);
});
