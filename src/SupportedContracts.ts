// Owners leaderboard dependency
import SupportedContractsJSON from '../data/supported_contracts.json';

interface ISupportedContracts {
  [key: string]: {
    address: string;
    name: string;
    opensea_slug: string;
  };
}

export const SupportedContracts: ISupportedContracts[] = JSON.parse(
  JSON.stringify(SupportedContractsJSON),
);
