import cors from 'cors';
import express, { Request, Response } from 'express';

import { SupportedCommunities } from './SupportedCommunities';
import { SupportedContracts } from './SupportedContracts';
import { SupportedWorlds } from './SupportedWorlds';
import { SupportedTokens } from './SupportedTokens';

const app = express();

const port = process.env.PORT || 3010;

app.use(
  cors({
    origin: '*',
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

app.get('/tokens', (req: Request, res: Response) => {
  res.send(SupportedTokens);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
