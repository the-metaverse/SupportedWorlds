import communities from '../communities.json';

export const SupportedCommunities: string[] = JSON.parse(
  JSON.stringify(communities),
);
