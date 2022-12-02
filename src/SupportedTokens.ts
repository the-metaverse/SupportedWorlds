// Owners leaderboard dependency
import SupportedTokensJSON from '../data/supported_tokens.json';

interface ISupportedTokens {
  [key: string]: {
    name: string;
    symbol: string;
    coingecko_id: string;
  };
}

export const SupportedTokens: ISupportedTokens = JSON.parse(
  JSON.stringify(SupportedTokensJSON),
);
