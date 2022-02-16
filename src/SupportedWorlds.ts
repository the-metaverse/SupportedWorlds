type Chain = 'ethereum' | 'polygon';

interface ISupportedWorlds {
  addresses: {
    land: string;
    estate?: string;
    coin?: string;
  };
  available: {
    map: boolean;
    leaderboard: boolean;
    analytics: boolean;
    NFTBank_estimate: boolean;
  };
  chain: Chain;
  coingecko_id?: string;
  currency?: string;
  description: string;
  discord?: string;
  label: string;
  logo: string;
  table?: {
    label: string;
    value: string;
  }[];
  theme: string;
  twitter?: string;
  value: string;
  website: string;
  whitepaper?: string;
}

export const SupportedWorlds: ISupportedWorlds[] = [
  {
    addresses: {
      coin: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
      estate: '0x959e104E1a4dB6317fA58F8295F586e1A978c297',
      land: '0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d',
    },
    available: {
      NFTBank_estimate: true,
      analytics: true,
      leaderboard: true,
      map: true,
    },
    chain: 'ethereum',
    coingecko_id: 'decentraland',
    currency: 'MANA',
    description:
      'Decentraland is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Decentraland is MANA.',
    label: 'Decentraland',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/decentraland.webp',
    table: [
      {
        label: 'Number of Parcels',
        value: '90,000',
      },
      {
        label: 'Metaverse Area',
        value: '9km²',
      },
      {
        label: 'Parcel Area',
        value: '16m²',
      },
    ],
    theme: '#EB4C5A',
    value: 'decentraland',
    website: 'https://decentraland.org/',
    whitepaper: 'https://docs.decentraland.org/decentraland/whitepaper/',
  },
  {
    addresses: {
      coin: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
      land: '0x5CC5B05a8A13E3fBDB0BB9FcCd98D38e50F90c38',
    },
    available: {
      analytics: true,
      leaderboard: true,
      map: true,
      NFTBank_estimate: true,
    },
    chain: 'ethereum',
    coingecko_id: 'the-sandbox',
    currency: 'SAND',
    description:
      'The Sandbox is a community-driven platform where creators can monetize voxel ASSETS and gaming experiences on the blockchain SAND.',
    label: 'The Sandbox',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/the-sandbox.webp',
    table: [
      {
        label: 'Number of Parcels',
        value: '166,464',
      },
      {
        label: 'Metaverse Area',
        value: '1,534.13km²',
      },
      {
        label: 'Parcel Area',
        value: '96m²',
      },
      {
        label: 'Small Estate Size',
        value: '3x3',
      },
      {
        label: 'Medium Estate Size',
        value: '6x6',
      },
      {
        label: 'Large Estate Size',
        value: '12x12',
      },
      {
        label: 'X-Large Estate Size',
        value: '24x24',
      },
    ],
    theme: '#3C87F3',
    value: 'the_sandbox',
    website: 'https://www.sandbox.game/en/',
    whitepaper:
      'https://installers.sandbox.game/The_Sandbox_Whitepaper_2020.pdf',
  },
  {
    addresses: {
      coin: '0x0000000000000000000000000000000000000000',
      land: '0x79986aF15539de2db9A5086382daEdA917A9CF0C',
    },
    available: {
      analytics: true,
      leaderboard: true,
      map: true,
      NFTBank_estimate: true,
    },
    chain: 'ethereum',
    coingecko_id: 'ethereum',
    currency: 'ETH',
    description:
      'Cryptovoxels is a virtual world and metaverse, powered by the Ethereum blockchain. Players can buy land and build stores and art galleries. Editing tools, avatars and text chat are built in. The currency of Cryptovoxels is ETH.',
    label: 'Cryptovoxels',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/cryptovoxels.webp',
    table: [
      {
        label: 'Total Parcels',
        value: '5,594 minted parcels',
      },
      {
        label: 'Total Land Area',
        value: '1,034,288m²',
      },
    ],
    theme: '#959595',
    value: 'cryptovoxels',
    website: 'https://www.cryptovoxels.com/',
  },
  {
    addresses: {
      coin: '0xDf801468a808a32656D2eD2D2d80B72A129739f4',
      land: '0x913ae503153d9A335398D0785Ba60A2d63dDB4e2',
    },
    available: {
      NFTBank_estimate: true,
      analytics: true,
      leaderboard: true,
      map: true,
    },
    chain: 'ethereum',
    coingecko_id: 'somnium-space-cubes',
    currency: 'CUBE',
    description:
      'Somnium Space is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Somnium Space is CUBE.',
    label: 'Somnium Space',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/somnium-space.webp',
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
    theme: '#5DC182',
    value: 'somnium_space',
    website: 'https://somniumspace.com/',
    whitepaper:
      'https://somniumspace.com/files/Somnium%20Space%20Economy%20Paper.pdf',
  },
  {
    addresses: {
      land: '0x6CC462bc49ceCFE943Bc4F477b23b92906e6074F',
    },
    available: {
      NFTBank_estimate: true,
      analytics: false,
      leaderboard: false,
      map: false,
    },
    chain: 'ethereum',
    coingecko_id: 'leagueofkingdoms',
    currency: 'LOKA',
    description:
      "League of Kingdoms' is an MMO Strategy game where gamers fight for dominion. You can fully own and seamlessly trade digital assets through NFT technology. You will participate in game governance through transparent voting and congress system.",
    label: 'League of Kingdoms',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/league-of-kingdoms.webp',
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
    theme: '#8CEEF7',
    value: 'league_of_kingdoms',
    website: 'https://www.leagueofkingdoms.com/',
    whitepaper: 'https://whitepaper.playersarena.foundation/loka',
  },
  {
    addresses: {
      land: '0xBD4455dA5929D5639EE098ABFaa3241e9ae111Af',
    },
    available: {
      NFTBank_estimate: false,
      analytics: true,
      leaderboard: true,
      map: false,
    },
    chain: 'ethereum',
    description:
      'NFT Worlds are Minecraft compatible, massively multiplayer, will have developer APIs, are decentralized, and more.',
    label: 'NFT Worlds',
    logo: 'https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/nft-worlds.webp',
    theme: '#70483C',
    value: 'nft_worlds',
    website: 'https://www.nftworlds.com/',
    whitepaper:
      'https://ipfs.nftworlds.com/ipfs/QmUqC5sa4dDLmuAE9ZmbxcyezBq2FAdiNKdH751wS2v8fd',
  },
  {
    addresses: {
      land: '0xfD89EA92F6EC07d955e2adBBA2400Ca1a6369028',
    },
    available: {
      NFTBank_estimate: false,
      analytics: false,
      leaderboard: false,
      map: false,
    },
    chain: 'ethereum',
    description:
      'The SuperWorld Decentralized Ad Network allows virtual landowners to share revenue generated on their property; through advertising, e-commerce, data, analytics, transactions, gaming and much more.',
    label: 'SuperWorld',
    logo: 'https://raw.githubusercontent.com/the-metaverse/supported-worlds/main/public/logos/superworld.webp',
    theme: '#9197FB',
    twitter: 'superworldapp',
    value: 'superworld',
    website: 'https://www.superworldapp.com/',
  },
];
