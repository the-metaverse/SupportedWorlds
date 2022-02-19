import communities from '../data/communities.json';

export const SupportedCommunities: string[] = JSON.parse(
  JSON.stringify(communities),
);
