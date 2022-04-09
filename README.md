# Supported Worlds

## Directory Structure
```
.
├── aws
│   ├── production_fargate.json
│   └── staging_fargate
├── data
│   ├── communities.json
│   ├── supported_contracts.json
│   └── supported_worlds.json
├── dist                            # local build output
├── node_modules                    # npm dependencies
├── public                          # static files
│   └── logos                       # logos
├── src
│   ├── index.ts
│   ├── SupportedCommunities.ts
│   ├── SupportedContracts.ts
│   ├── SupportedWorlds.ts
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── Dockerfile
├── Makefile
├── package-lock.json
├── package.json
├── README.md
├── tests.sh
└── tsconfig.json
```

## Adding a new world
file: [supported_worlds.json](data/supported_worlds.json)

schema:
```json
{
    "addresses": {
        "coin": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
        "estate": "0x959e104E1a4dB6317fA58F8295F586e1A978c297",
        "land": "0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d"
    },
    "available": {
        "NFTBank_estimate": true,
        "analytics": true,
        "leaderboard": true,                                      # whether to include the world into the leaderboard scrapers
        "map": true
    },
    "chain": "ethereum",
    "coingecko_id": "decentraland",
    "opensea_slug": "decentraland",                               # world name opensea refers to
    "currency": "MANA",
    "description": "Decentraland is a virtual reality platform powered by the Ethereum blockchain. Users of Decentraland can build and explore 3D creations, play games and socialize. The currency of Decentraland is MANA.",
    "label": "Decentraland",
    "logo": "https://raw.githubusercontent.com/the-metaverse/SupportedWorlds/main/public/logos/decentraland.webp",
    "parcelSize": 16,
    "table": [
        {
            "label": "Number of Parcels",
            "value": "90,000"
        },
        {
            "label": "Parcel Area",
            "value": "16m²"
        }
    ],
    "theme": "#EB4C5A",
    "traits": {
        "ignore": ["X", "Y", "Type"],
        "top": [
        {
            "value": "Distance to Road",
            "label": "from Road"
        },
        {
            "value": "Distance to District",
            "label": "from District"
        },
        {
            "value": "Distance to Plaza",
            "label": "from Plaza"
        }
        ]
    },
    "value": "decentraland",
    "website": "https://decentraland.org/",
    "whitepaper": "https://docs.decentraland.org/decentraland/whitepaper/"
}
```

1. create a new world in the supported_worlds.json file by following the schema
and appending to the list of supported worlds.
