interface ISupportedWorlds {
  address: {
    land: string;
    estate: string;
    coin?: string;
  };
  value: string;
  label: string;
  logo: string;
  link: string;
  whitepaper?: string;
  etherscan: string;
  purchase?: string;
  theme?: string;
  currency?: string;
  description: string;
  table?: {
    stat: string;
    value: string;
  }[];
  hasMap: boolean;
  coingecko?: string;
  leaderboard: boolean;
}

export const SupportedWorlds: ISupportedWorlds[] = [
  {
    address: {
      land: "0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d",
      estate: "0x959e104E1a4dB6317fA58F8295F586e1A978c297",
      coin: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    },
    value: "decentraland",
    label: "Decentraland",
    logo: "/logos/decentraland.webp",
    link: "https://decentraland.org/",
    whitepaper: "https://docs.decentraland.org/decentraland/whitepaper/",
    etherscan:
      "https://etherscan.io/token/0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    purchase: "https://www.gemini.com/prices/decentraland",
    currency: "MANA",
    description:
      "Decentraland is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Decentraland is MANA.",
    table: [
      { stat: "Number of Parcels", value: "90,000" },
      { stat: "Metaverse Area", value: "9km²" },
      { stat: "Parcel Area", value: "16m²" },
    ],
    hasMap: true,
    coingecko: "decentraland",
    leaderboard: true,
  },
  {
    address: {
      land: "0x50f5474724e0Ee42D9a4e711ccFB275809Fd6d4a",
      estate: "",
      coin: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    },
    value: "the_sandbox",
    label: "The Sandbox",
    logo: "/logos/the-sandbox.webp",
    link: "https://www.sandbox.game/en/",
    whitepaper:
      "https://installers.sandbox.game/The_Sandbox_Whitepaper_2020.pdf",
    etherscan:
      "https://etherscan.io/token/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
    purchase: "https://www.gemini.com/prices/sand",
    theme: "",
    currency: "SAND",
    description:
      "The Sandbox is a community-driven platform where creators can monetize voxel ASSETS and gaming experiences on the blockchain SAND.",
    table: [
      { stat: "Number of Parcels", value: "166,464" },
      { stat: "Metaverse Area", value: "1,534.13km²" },
      { stat: "Parcel Area", value: "96m²" },
      { stat: "Small Estate Size", value: "3x3" },
      { stat: "Medium Estate Size", value: "6x6" },
      { stat: "Large Estate Size", value: "12x12" },
      { stat: "X-Large Estate Size", value: "24x24" },
    ],
    hasMap: true,
    coingecko: "the-sandbox",
    leaderboard: true,
  },
  {
    address: {
      land: "0x79986aF15539de2db9A5086382daEdA917A9CF0C",
      estate: "",
      coin: "0x0000000000000000000000000000000000000000",
    },
    value: "cryptovoxels",
    label: "Cryptovoxels",
    logo: "/logos/cryptovoxels.webp",
    link: "https://www.cryptovoxels.com/",
    whitepaper: "",
    description:
      "Cryptovoxels is a virtual world and metaverse, powered by the Ethereum blockchain. Players can buy land and build stores and art galleries. Editing tools, avatars and text chat are built in. The currency of Cryptovoxels is ETH.",
    etherscan:
      "https://etherscan.io/token/0x79986aF15539de2db9A5086382daEdA917A9CF0C",
    purchase: "",
    theme: "",
    currency: "ETH",
    table: [
      { stat: "Total Parcels", value: "5,594 minted parcels" },
      { stat: "Total Land Area", value: "1,034,288m²" },
    ],
    hasMap: true,
    coingecko: "ethereum",
    leaderboard: true,
  },
  {
    address: {
      land: "0x913ae503153d9A335398D0785Ba60A2d63dDB4e2",
      estate: "",
      coin: "0xDf801468a808a32656D2eD2D2d80B72A129739f4",
    },
    value: "somnium_space",
    label: "Somnium Space",
    logo: "/logos/somnium-space.webp",
    link: "https://somniumspace.com/",
    whitepaper:
      "https://somniumspace.com/files/Somnium%20Space%20Economy%20Paper.pdf",
    description:
      "Somnium Space is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Somnium Space is CUBE.",
    etherscan:
      "https://etherscan.io/token/0xdf801468a808a32656d2ed2d2d80b72a129739f4",
    purchase: "https://www.gemini.com/prices/somnium-space",
    theme: "",
    currency: "CUBE",
    table: [
      {
        stat: "Total Land",
        value: "5,026 parcels",
      },
      {
        stat: "Small Land Area",
        value: "200m² & 10m height limit",
      },
      {
        stat: "Medium Land Area",
        value: "600m² & 25m height limit",
      },
      {
        stat: "XL Land Area",
        value: "1500m² & 50m height limit",
      },
    ],
    hasMap: true,
    coingecko: "somnium-space-cubes",
    leaderboard: true,
  },
  {
    address: {
      land: "0x6CC462bc49ceCFE943Bc4F477b23b92906e6074F",
      estate: "",
    },
    value: "league_of_kingdoms",
    label: "League of Kingdoms",
    logo: "/logos/league-of-kingdoms.webp",
    link: "https://www.leagueofkingdoms.com/",
    description:
      "League of Kingdoms' is an MMO Strategy game where gamers fight for dominion. You can fully own and seamlessly trade digital assets through NFT technology. You will participate in game governance through transparent voting and congress system.",
    etherscan:
      "https://etherscan.io/token/0x6CC462bc49ceCFE943Bc4F477b23b92906e6074F",
    currency: "LOKA",
    table: [
      {
        stat: "Total Land",
        value: "5,026 parcels",
      },
      {
        stat: "Small Land Area",
        value: "200m² & 10m height limit",
      },
      {
        stat: "Medium Land Area",
        value: "600m² & 25m height limit",
      },
      {
        stat: "XL Land Area",
        value: "1500m² & 50m height limit",
      },
    ],
    hasMap: false,
    coingecko: "leagueofkingdoms",
    leaderboard: false,
  },
  // {
  //   address: {
  //     land: '0xBD4455dA5929D5639EE098ABFaa3241e9ae111Af',
  //     estate: '',
  //   },
  //   value: 'nft_worlds',
  //   label: 'NFT Worlds',
  //   logo: '/logos/nftworlds.webp',
  //   link: 'https://www.nftworlds.com/play',
  //   world: 'https://ipfs.nftworlds.com/ipfs/QmUqC5sa4dDLmuAE9ZmbxcyezBq2FAdiNKdH751wS2v8fd',
  //   description:
  //     'NFT Worlds are Minecraft compatible, massively multiplayer, will have developer APIs, are decentralized, and more.',
  //   etherscan:
  //     'https://etherscan.io/address/0xbd4455da5929d5639ee098abfaa3241e9ae111af',
  //   hasMap: false,
  //   leaderboard: false,
  // },
];
