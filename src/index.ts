import express, { Request, Response } from "express";
import { SupportedWorlds } from "./SupportedWorlds";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "https://wemeta-supported-worlds-prod.herokuapp.com/",
      "https://wemeta-supported-worlds-dev.herokuapp.com/",
    ],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(process.env.PORT || 5000);
