import cors from 'cors';
import express, { Request, Response } from 'express';

import { SupportedWorlds } from './SupportedWorlds';

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://wemeta-analytics-client-dev.herokuapp.com/welcome',
      'https://analytics.wemeta.world/welcome',
      'https://wemeta-analytics-client-dev.herokuapp.com',
      'https://analytics.wemeta.world',
      'https://wemeta-dev.herokuapp.com/',
    ],
  }),
);

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(process.env.PORT || 3010);
