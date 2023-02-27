const configurator = [
  {
    lang: "ru",
    data: [
      {
        categoryName: "Одноцветный",
        image: "https://i.ibb.co/t2bhZVY/plains.jpg",
        id: 1,
        type: "plains",
        price: "8",
      },
      {
        categoryName: "Узоры",
        image: "https://i.ibb.co/NCtWNn0/patterns.jpg",
        id: 2,
        type: "patterns",
        price: "10",
        subCategories: [
          {
            name: "PTN 309",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503316?width=300&height=300&view=0&cachedSvgVersion=f5e7d974-3ea9-4586-98c7-cc3b2d708acd&key=undefined&distributorId=76104207",
            id: 21,
            type: "PTN309",
          },
          {
            name: "PTN 310",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503317?width=300&height=300&view=0&cachedSvgVersion=0698ff20-696d-4c6a-98aa-d72f1e1bd7c6&key=undefined&distributorId=76104207",
            id: 22,
            type: "PTN310",
          },
          {
            name: "PTN 312",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503318?width=300&height=300&view=0&cachedSvgVersion=4898cd21-ac70-4e30-a2f1-f1b70cdfa2b9&key=undefined&distributorId=76104207",
            id: 23,
            type: "PTN312",
          },
          {
            name: "PTN 318",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503319?width=300&height=300&view=0&cachedSvgVersion=f7840d0c-d87d-48f3-848c-87a76a5629b0&key=undefined&distributorId=76104207",
            id: 24,
            type: "PTN318",
          },
        ],
      },
      {
        categoryName: "Центральный узор",
        image: "https://i.ibb.co/t4RqPjL/centered.jpg",
        id: 3,
        type: "centred",
        price: "12",
        subCategories: [
          {
            name: "CENT 507",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503301?width=300&height=300&view=0&cachedSvgVersion=06ca279a-645b-4822-a5d8-45c1ed02d51a&key=undefined&distributorId=76104207",
            id: 32,
            type: "CENT507",
          },
          {
            name: "CENT 512",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503302?width=300&height=300&view=0&cachedSvgVersion=ba87498e-52b4-4247-90bd-417093d6b2a3&key=undefined&distributorId=76104207",

            id: 33,
            type: "CENT512",
          },
          {
            name: "CENT 516",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503303?width=300&height=300&view=0&cachedSvgVersion=a62cdbdd-1d8e-4b28-8f7f-ceafdbc67272&key=undefined&distributorId=76104207",

            id: 34,
            type: "CENT516",
          },
          {
            name: "CENT 517",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503304?width=300&height=300&view=0&cachedSvgVersion=bcbeb6d1-0b72-4e24-b30c-10343ac35324&key=undefined&distributorId=76104207",

            id: 35,
            type: "CENT517",
          },
          {
            name: "CENT 520",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503305?width=300&height=300&view=0&cachedSvgVersion=053231d3-ab56-475b-9406-4b661fa7a353&key=undefined&distributorId=76104207",

            id: 36,
            type: "CENT520",
          },
        ],
      },
      {
        categoryName: "Простой",
        image: "https://i.ibb.co/2vbQXvV/simple.jpg",
        id: 4,
        type: "simple",
        price: "11",
        subCategories: [
          {
            name: "PLN 802",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503312?width=300&height=300&view=0&cachedSvgVersion=cc52dac8-8649-4177-b160-1f1b39fcb06c&key=undefined&distributorId=76104207",
            id: 43,
            type: "PLN802",
          },
          {
            name: "PLN 803",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503313?width=300&height=300&view=0&cachedSvgVersion=650d3071-0dea-4290-9797-27ec242f037f&key=undefined&distributorId=76104207",

            id: 44,
            type: "PLN803",
          },
          {
            name: "PLN 804",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503314?width=300&height=300&view=0&cachedSvgVersion=d265c29e-5693-4135-a57a-17fa4f71eabb&key=undefined&distributorId=76104207",

            id: 45,
            type: "PLN804",
          },
          {
            name: "PLN 805",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503315?width=300&height=300&view=0&cachedSvgVersion=825f7552-c5f1-437a-9cf4-832a5b5dbee9&key=undefined&distributorId=76104207",

            id: 46,
            type: "PLN805",
          },
        ],
      },
      {
        categoryName: "В клетку",
        image: "https://i.ibb.co/KG8Zfhm/tartan.jpg",
        id: 5,
        type: "tartan",
        price: "20",
        subCategories: [
          {
            name: "Tartan 001",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503289?width=300&height=300&view=0&cachedSvgVersion=b343318b-0b99-45a7-97bb-3e9903f48d58&key=undefined&distributorId=76104207",
            id: 54,
            type: "Tartan001",
          },
          {
            name: "Tartan 002",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503290?width=300&height=300&view=0&cachedSvgVersion=9f7f3754-e624-4975-b79d-2bcde015d52d&key=undefined&distributorId=76104207",
            id: 55,
            type: "Tartan002",
          },
          {
            name: "Tartan 003",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503291?width=300&height=300&view=0&cachedSvgVersion=becafc93-2762-40ed-b42a-1035f0ac7d9c&key=undefined&distributorId=76104207",
            id: 56,
            type: "Tartan003",
          },
          {
            name: "Tartan 004",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503292?width=300&height=300&view=0&cachedSvgVersion=6ab53acf-6a1b-4a39-8069-75391d634faf&key=undefined&distributorId=76104207",
            id: 57,
            type: "Tartan004",
          },
          {
            name: "Tartan 005",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503293?width=300&height=300&view=0&cachedSvgVersion=ac545f8f-e39f-4b4d-a5f9-a2bc6ec68de5&key=undefined&distributorId=76104207",
            id: 58,
            type: "Tartan005",
          },
        ],
      },
      {
        categoryName: "В горошек",
        image: "https://i.ibb.co/0Jtdxqs/polkadot.jpg",
        id: 6,
        type: "polkadot",
        price: "14",
        subCategories: [
          {
            name: "DOT 701",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503306?width=300&height=300&view=0&cachedSvgVersion=3aa0369d-d824-4b99-b1b7-e58989346f42&key=undefined&distributorId=76104207",
            id: 65,
            type: "DOT701",
          },
          {
            name: "DOT 702",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503307?width=300&height=300&view=0&cachedSvgVersion=9b24f5cf-8ab9-431a-bbc6-1b3b1152ab69&key=undefined&distributorId=76104207",
            id: 65,
            type: "DOT702",
          },
          {
            name: "DOT 705",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503308?width=300&height=300&view=0&cachedSvgVersion=eb53fc1a-06a3-48fd-95e2-ef63b1fd0b54&key=undefined&distributorId=76104207",
            id: 65,
            type: "DOT705",
          },
          {
            name: "DOT 706",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503309?width=300&height=300&view=0&cachedSvgVersion=2c556469-4bcc-4bba-887d-88b964cbb122&key=undefined&distributorId=76104207",
            id: 65,
            type: "DOT706",
          },
          {
            name: "DOT 707",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503310?width=300&height=300&view=0&cachedSvgVersion=bc7d03b7-49a7-415f-ac81-89ac50a3e809&key=undefined&distributorId=76104207",
            id: 65,
            type: "DOT707",
          },
        ],
      },
      {
        categoryName: "В полоску",
        image: "https://i.ibb.co/rGPgqBx/stripedtieps.jpg",
        id: 7,
        type: "stripedtieps",
        price: "25",
        subCategories: [
          {
            name: "STR 301",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528143?width=300&height=300&view=0&cachedSvgVersion=98261b52-3656-44a9-837d-ec2b9f2b6827&key=undefined&distributorId=76104207",
            id: 71,
            type: "STR301",
          },
          {
            name: "STR 307",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528144?width=300&height=300&view=0&cachedSvgVersion=cd07d334-9a45-495c-ab28-1eb7a240d26b&key=undefined&distributorId=76104207",
            id: 72,
            type: "STR307",
          },
          {
            name: "STR 309",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528145?width=300&height=300&view=0&cachedSvgVersion=65460b18-e64d-4e96-b25a-c1fe35880d7d&key=undefined&distributorId=76104207",
            id: 73,
            type: "STR309",
          },
          {
            name: "STR 312",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528146?width=300&height=300&view=0&cachedSvgVersion=0bec7668-4ea8-4700-bde7-a803ba838831&key=undefined&distributorId=76104207",
            id: 74,
            type: "STR312",
          },
          {
            name: "STR 313",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528147?width=300&height=300&view=0&cachedSvgVersion=cd638812-4d1f-41e6-ab2f-528c6d233a31&key=undefined&distributorId=76104207",
            id: 75,
            type: "STR313",
          },
          {
            name: "STR 324",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528148?width=300&height=300&view=0&cachedSvgVersion=dadb5064-fe15-4668-876e-f266e180583d&key=undefined&distributorId=76104207",
            id: 76,
            type: "STR324",
          },
          {
            name: "STR 326",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528142?width=300&height=300&view=0&cachedSvgVersion=7b2159ff-e0da-4760-bb92-82676f19f29e&key=undefined&distributorId=76104207",
            id: 77,
            type: "STR326",
          },
          {
            name: "STR 327",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528149?width=300&height=300&view=0&cachedSvgVersion=043b2dbf-233c-4ae7-bb74-dba4588af178&key=undefined&distributorId=76104207",
            id: 78,
            type: "STR327",
          },
          {
            name: "STR 328",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528150?width=300&height=300&view=0&cachedSvgVersion=6a328c77-a101-400f-ba27-1b5d660a333a&key=undefined&distributorId=76104207",
            id: 79,
            type: "STR328",
          },
          {
            name: "STR 329",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528151?width=300&height=300&view=0&cachedSvgVersion=0b4f106b-0144-425b-bc47-2dab347096c5&key=undefined&distributorId=76104207",
            id: 80,
            type: "STR329",
          },
          {
            name: "STR 330",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528152?width=300&height=300&view=0&cachedSvgVersion=3cbaf99a-1058-4689-9fba-ee46d08d8fd2&key=undefined&distributorId=76104207",
            id: 81,
            type: "STR330",
          },
        ],
      },
    ],
  },
  {
    lang: "en",
    data: [
      {
        categoryName: "Plain",
        image: "https://i.ibb.co/t2bhZVY/plains.jpg",
        id: 111,
        type: "plains",
        price: "8",
      },
      {
        categoryName: "Patterns",
        image: "https://i.ibb.co/NCtWNn0/patterns.jpg",
        id: 222,
        type: "patterns",
        price: "10",
        subCategories: [
          {
            name: "PTN 309",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503316?width=300&height=300&view=0&cachedSvgVersion=f5e7d974-3ea9-4586-98c7-cc3b2d708acd&key=undefined&distributorId=76104207",
            id: 221,
            type: "PTN309",
          },
          {
            name: "PTN 310",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503317?width=300&height=300&view=0&cachedSvgVersion=0698ff20-696d-4c6a-98aa-d72f1e1bd7c6&key=undefined&distributorId=76104207",
            id: 222,
            type: "PTN310",
          },
          {
            name: "PTN 312",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503318?width=300&height=300&view=0&cachedSvgVersion=4898cd21-ac70-4e30-a2f1-f1b70cdfa2b9&key=undefined&distributorId=76104207",
            id: 223,
            type: "PTN312",
          },
          {
            name: "PTN 318",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503319?width=300&height=300&view=0&cachedSvgVersion=f7840d0c-d87d-48f3-848c-87a76a5629b0&key=undefined&distributorId=76104207",
            id: 224,
            type: "PTN318",
          },
        ],
      },
      {
        categoryName: "Centred",
        image: "https://i.ibb.co/t4RqPjL/centered.jpg",
        id: 333,
        type: "centred",
        price: "12",
        subCategories: [
          {
            name: "CENT 507",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503301?width=300&height=300&view=0&cachedSvgVersion=06ca279a-645b-4822-a5d8-45c1ed02d51a&key=undefined&distributorId=76104207",
            id: 332,
            type: "CENT507",
          },
          {
            name: "CENT 512",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503302?width=300&height=300&view=0&cachedSvgVersion=ba87498e-52b4-4247-90bd-417093d6b2a3&key=undefined&distributorId=76104207",

            id: 333,
            type: "CENT512",
          },
          {
            name: "CENT 516",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503303?width=300&height=300&view=0&cachedSvgVersion=a62cdbdd-1d8e-4b28-8f7f-ceafdbc67272&key=undefined&distributorId=76104207",

            id: 334,
            type: "CENT516",
          },
          {
            name: "CENT 517",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503304?width=300&height=300&view=0&cachedSvgVersion=bcbeb6d1-0b72-4e24-b30c-10343ac35324&key=undefined&distributorId=76104207",

            id: 335,
            type: "CENT517",
          },
          {
            name: "CENT 520",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503305?width=300&height=300&view=0&cachedSvgVersion=053231d3-ab56-475b-9406-4b661fa7a353&key=undefined&distributorId=76104207",

            id: 336,
            type: "CENT520",
          },
        ],
      },
      {
        categoryName: "Simple",
        image: "https://i.ibb.co/2vbQXvV/simple.jpg",
        id: 400,
        type: "simple",
        price: "11",
        subCategories: [
          {
            name: "PLN 802",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503312?width=300&height=300&view=0&cachedSvgVersion=cc52dac8-8649-4177-b160-1f1b39fcb06c&key=undefined&distributorId=76104207",
            id: 401,
            type: "PLN802",
          },
          {
            name: "PLN 803",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503313?width=300&height=300&view=0&cachedSvgVersion=650d3071-0dea-4290-9797-27ec242f037f&key=undefined&distributorId=76104207",

            id: 402,
            type: "PLN803",
          },
          {
            name: "PLN 804",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503314?width=300&height=300&view=0&cachedSvgVersion=d265c29e-5693-4135-a57a-17fa4f71eabb&key=undefined&distributorId=76104207",

            id: 403,
            type: "PLN804",
          },
          {
            name: "PLN 805",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503315?width=300&height=300&view=0&cachedSvgVersion=825f7552-c5f1-437a-9cf4-832a5b5dbee9&key=undefined&distributorId=76104207",

            id: 404,
            type: "PLN805",
          },
        ],
      },
      {
        categoryName: "Tartan",
        image: "https://i.ibb.co/KG8Zfhm/tartan.jpg",
        id: 500,
        type: "tartan",
        price: "20",
        subCategories: [
          {
            name: "Tartan 001",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503289?width=300&height=300&view=0&cachedSvgVersion=b343318b-0b99-45a7-97bb-3e9903f48d58&key=undefined&distributorId=76104207",
            id: 501,
            type: "Tartan001",
          },
          {
            name: "Tartan 002",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503290?width=300&height=300&view=0&cachedSvgVersion=9f7f3754-e624-4975-b79d-2bcde015d52d&key=undefined&distributorId=76104207",
            id: 502,
            type: "Tartan002",
          },
          {
            name: "Tartan 003",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503291?width=300&height=300&view=0&cachedSvgVersion=becafc93-2762-40ed-b42a-1035f0ac7d9c&key=undefined&distributorId=76104207",
            id: 503,
            type: "Tartan003",
          },
          {
            name: "Tartan 004",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503292?width=300&height=300&view=0&cachedSvgVersion=6ab53acf-6a1b-4a39-8069-75391d634faf&key=undefined&distributorId=76104207",
            id: 504,
            type: "Tartan004",
          },
          {
            name: "Tartan 005",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503293?width=300&height=300&view=0&cachedSvgVersion=ac545f8f-e39f-4b4d-a5f9-a2bc6ec68de5&key=undefined&distributorId=76104207",
            id: 505,
            type: "Tartan005",
          },
        ],
      },
      {
        categoryName: "Polka Dot",
        image: "https://i.ibb.co/0Jtdxqs/polkadot.jpg",
        id: 600,
        type: "polkadot",
        price: "14",
        subCategories: [
          {
            name: "DOT 701",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503306?width=300&height=300&view=0&cachedSvgVersion=3aa0369d-d824-4b99-b1b7-e58989346f42&key=undefined&distributorId=76104207",
            id: 601,
            type: "DOT701",
          },
          {
            name: "DOT 702",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503307?width=300&height=300&view=0&cachedSvgVersion=9b24f5cf-8ab9-431a-bbc6-1b3b1152ab69&key=undefined&distributorId=76104207",
            id: 602,
            type: "DOT702",
          },
          {
            name: "DOT 705",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503308?width=300&height=300&view=0&cachedSvgVersion=eb53fc1a-06a3-48fd-95e2-ef63b1fd0b54&key=undefined&distributorId=76104207",
            id: 602,
            type: "DOT705",
          },
          {
            name: "DOT 706",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503309?width=300&height=300&view=0&cachedSvgVersion=2c556469-4bcc-4bba-887d-88b964cbb122&key=undefined&distributorId=76104207",
            id: 603,
            type: "DOT706",
          },
          {
            name: "DOT 707",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503310?width=300&height=300&view=0&cachedSvgVersion=bc7d03b7-49a7-415f-ac81-89ac50a3e809&key=undefined&distributorId=76104207",
            id: 604,
            type: "DOT707",
          },
        ],
      },
      {
        categoryName: "Striped Ties",
        image: "https://i.ibb.co/rGPgqBx/stripedtieps.jpg",
        id: 700,
        type: "stripedtieps",
        price: "25",
        subCategories: [
          {
            name: "STR 301",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528143?width=300&height=300&view=0&cachedSvgVersion=98261b52-3656-44a9-837d-ec2b9f2b6827&key=undefined&distributorId=76104207",
            id: 701,
            type: "STR301",
          },
          {
            name: "STR 307",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528144?width=300&height=300&view=0&cachedSvgVersion=cd07d334-9a45-495c-ab28-1eb7a240d26b&key=undefined&distributorId=76104207",
            id: 702,
            type: "STR307",
          },
          {
            name: "STR 309",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528145?width=300&height=300&view=0&cachedSvgVersion=65460b18-e64d-4e96-b25a-c1fe35880d7d&key=undefined&distributorId=76104207",
            id: 703,
            type: "STR309",
          },
          {
            name: "STR 312",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528146?width=300&height=300&view=0&cachedSvgVersion=0bec7668-4ea8-4700-bde7-a803ba838831&key=undefined&distributorId=76104207",
            id: 704,
            type: "STR312",
          },
          {
            name: "STR 313",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528147?width=300&height=300&view=0&cachedSvgVersion=cd638812-4d1f-41e6-ab2f-528c6d233a31&key=undefined&distributorId=76104207",
            id: 705,
            type: "STR313",
          },
          {
            name: "STR 324",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528148?width=300&height=300&view=0&cachedSvgVersion=dadb5064-fe15-4668-876e-f266e180583d&key=undefined&distributorId=76104207",
            id: 706,
            type: "STR324",
          },
          {
            name: "STR 326",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528142?width=300&height=300&view=0&cachedSvgVersion=7b2159ff-e0da-4760-bb92-82676f19f29e&key=undefined&distributorId=76104207",
            id: 707,
            type: "STR326",
          },
          {
            name: "STR 327",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528149?width=300&height=300&view=0&cachedSvgVersion=043b2dbf-233c-4ae7-bb74-dba4588af178&key=undefined&distributorId=76104207",
            id: 708,
            type: "STR327",
          },
          {
            name: "STR 328",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528150?width=300&height=300&view=0&cachedSvgVersion=6a328c77-a101-400f-ba27-1b5d660a333a&key=undefined&distributorId=76104207",
            id: 709,
            type: "STR328",
          },
          {
            name: "STR 329",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528151?width=300&height=300&view=0&cachedSvgVersion=0b4f106b-0144-425b-bc47-2dab347096c5&key=undefined&distributorId=76104207",
            id: 710,
            type: "STR329",
          },
          {
            name: "STR 330",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6528152?width=300&height=300&view=0&cachedSvgVersion=3cbaf99a-1058-4689-9fba-ee46d08d8fd2&key=undefined&distributorId=76104207",
            id: 711,
            type: "STR330",
          },
        ],
      },
    ],
  },
];

export default configurator;
