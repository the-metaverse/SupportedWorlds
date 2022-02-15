import cors from 'cors';
import express, { Request, Response } from 'express';

import { SupportedWorlds } from './SupportedWorlds';

const app = express();

const ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://analytics.wemeta.world',
  'https://analytics.wemeta.world/',
  'https://wemeta-analytics-client-dev.herokuapp.com',
  'https://wemeta-analytics-client-dev.herokuapp.com/',
  'https://wemeta-dev.herokuapp.com/',
  'https://wemeta-dev.herokuapp.com',
  'https://wemeta.world/',
  'https://wemeta.world/browse',
  'https://wemeta.world/leaderboards',
];

app.use(
  cors({
    origin: ORIGINS,
  }),
);

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(process.env.PORT || 3010);
