import cors from 'cors';
import express, { Request, Response } from 'express';

import { SupportedCommunities } from './SupportedCommunities';
import { SupportedContracts } from './SupportedContracts';
import { SupportedWorlds } from './SupportedWorlds';

const app = express();

const port = process.env.PORT || 3010;

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://wemeta.world',
      'https://wemeta-dev.herokuapp.com',
      'https://wemeta-staging.herokuapp.com',
      'https://analytics.wemeta.world',
      'https://wemeta-analytics-client-dev.herokuapp.com',
      'https://wemeta-api-dev.herokuapp.com',
      'https://wemeta-api-production.herokuapp.com',
    ],
  }),
);

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.get('/communities', (req: Request, res: Response) => {
  res.send(SupportedCommunities);
});

app.get('/owners', (req: Request, res: Response) => {
  res.send(SupportedContracts);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
