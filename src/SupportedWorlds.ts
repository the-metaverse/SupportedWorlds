interface ISupportedWorlds {
  addresses: {
    land: string;
    estate?: string;
    coin?: string;
  };
  value: string;
  label: string;
  logo: string;
  website: string;
  discord?: string;
  twitter?: string;
  whitepaper?: string;
  currency?: string;
  theme: string;
  description: string;
  table?: {
    label: string;
    value: string;
  }[];
  coingecko_id?: string;
  available: {
    map: boolean;
    leaderboard: boolean;
    analytics: boolean;
    NFTBank_estimate: boolean;
  };
}

export const SupportedWorlds: ISupportedWorlds[] = [
  {
    addresses: {
      land: '0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d',
      estate: '0x959e104E1a4dB6317fA58F8295F586e1A978c297',
      coin: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
    },
    value: 'decentraland',
    label: 'Decentraland',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/decentraland.webp',
    website: 'https://decentraland.org/',
    whitepaper: 'https://docs.decentraland.org/decentraland/whitepaper/',
    currency: 'MANA',
    theme: '#EB4C5A',
    description:
      'Decentraland is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Decentraland is MANA.',
    table: [
      { label: 'Number of Parcels', value: '90,000' },
      { label: 'Metaverse Area', value: '9km²' },
      { label: 'Parcel Area', value: '16m²' },
    ],
    coingecko_id: 'decentraland',
    available: {
      map: true,
      leaderboard: true,
      analytics: true,
      NFTBank_estimate: true,
    },
  },
  {
    addresses: {
      land: '0x50f5474724e0Ee42D9a4e711ccFB275809Fd6d4a',
      coin: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
    },
    value: 'the_sandbox',
    label: 'The Sandbox',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/the-sandbox.webp',
    website: 'https://www.sandbox.game/en/',
    whitepaper:
      'https://installers.sandbox.game/The_Sandbox_Whitepaper_2020.pdf',
    currency: 'SAND',
    theme: '#3C87F3',
    description:
      'The Sandbox is a community-driven platform where creators can monetize voxel ASSETS and gaming experiences on the blockchain SAND.',
    table: [
      { label: 'Number of Parcels', value: '166,464' },
      { label: 'Metaverse Area', value: '1,534.13km²' },
      { label: 'Parcel Area', value: '96m²' },
      { label: 'Small Estate Size', value: '3x3' },
      { label: 'Medium Estate Size', value: '6x6' },
      { label: 'Large Estate Size', value: '12x12' },
      { label: 'X-Large Estate Size', value: '24x24' },
    ],
    coingecko_id: 'the-sandbox',
    available: {
      map: true,
      leaderboard: true,
      analytics: true,
      NFTBank_estimate: true,
    },
  },
  {
    addresses: {
      land: '0x79986aF15539de2db9A5086382daEdA917A9CF0C',
      coin: '0x0000000000000000000000000000000000000000',
    },
    value: 'cryptovoxels',
    label: 'Cryptovoxels',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/cryptovoxels.webp',
    website: 'https://www.cryptovoxels.com/',
    theme: '#959595',
    description:
      'Cryptovoxels is a virtual world and metaverse, powered by the Ethereum blockchain. Players can buy land and build stores and art galleries. Editing tools, avatars and text chat are built in. The currency of Cryptovoxels is ETH.',
    currency: 'ETH',
    table: [
      { label: 'Total Parcels', value: '5,594 minted parcels' },
      { label: 'Total Land Area', value: '1,034,288m²' },
    ],
    coingecko_id: 'ethereum',
    available: {
      map: true,
      leaderboard: true,
      analytics: true,
      NFTBank_estimate: true,
    },
  },
  {
    addresses: {
      land: '0x913ae503153d9A335398D0785Ba60A2d63dDB4e2',
      coin: '0xDf801468a808a32656D2eD2D2d80B72A129739f4',
    },
    value: 'somnium_space',
    label: 'Somnium Space',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/somnium-space.webp',
    website: 'https://somniumspace.com/',
    whitepaper:
      'https://somniumspace.com/files/Somnium%20Space%20Economy%20Paper.pdf',
    theme: '#5DC182',
    description:
      'Somnium Space is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Somnium Space is CUBE.',
    currency: 'CUBE',
    table: [
      {
        label: 'Total Land',
        value: '5,026 parcels',
      },
      {
        label: 'Small Land Area',
        value: '200m² & 10m height limit',
      },
      {
        label: 'Medium Land Area',
        value: '600m² & 25m height limit',
      },
      {
        label: 'XL Land Area',
        value: '1500m² & 50m height limit',
      },
    ],
    coingecko_id: 'somnium-space-cubes',
    available: {
      map: true,
      leaderboard: true,
      analytics: true,
      NFTBank_estimate: true,
    },
  },
  {
    addresses: {
      land: '0x6CC462bc49ceCFE943Bc4F477b23b92906e6074F',
    },
    value: 'league_of_kingdoms',
    label: 'League of Kingdoms',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/league-of-kingdoms.webp',
    website: 'https://www.leagueofkingdoms.com/',
    whitepaper: 'https://whitepaper.playersarena.foundation/loka',
    theme: '#8CEEF7',
    description:
      "League of Kingdoms' is an MMO Strategy game where gamers fight for dominion. You can fully own and seamlessly trade digital assets through NFT technology. You will participate in game governance through transparent voting and congress system.",
    currency: 'LOKA',
    table: [
      {
        label: 'Total Land',
        value: '5,026 parcels',
      },
      {
        label: 'Small Land Area',
        value: '200m² & 10m height limit',
      },
      {
        label: 'Medium Land Area',
        value: '600m² & 25m height limit',
      },
      {
        label: 'XL Land Area',
        value: '1500m² & 50m height limit',
      },
    ],
    coingecko_id: 'leagueofkingdoms',
    available: {
      map: false,
      leaderboard: false,
      analytics: false,
      NFTBank_estimate: true,
    },
  },
  {
    addresses: {
      land: '0xD5d86FC8d5C0Ea1aC1Ac5Dfab6E529c9967a45E9',
    },
    value: 'nft-worlds',
    label: 'NFT Worlds',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/nft-worlds.webp',
    website: 'https://www.nftworlds.com/',
    whitepaper:
      'https://ipfs.nftworlds.com/ipfs/QmUqC5sa4dDLmuAE9ZmbxcyezBq2FAdiNKdH751wS2v8fd',
    theme: '#70483C',
    description:
      'NFT Worlds are Minecraft compatible, massively multiplayer, will have developer APIs, are decentralized, and more.',
    available: {
      map: false,
      leaderboard: false,
      analytics: false,
      NFTBank_estimate: true,
    },
  },
];
