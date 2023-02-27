const colors = [
  {
    name: "BLACKB6",
    color: [34, 34, 34],
  },
  {
    name: "CHARCOALGREYB92",
    color: [56, 46, 44],
  },
  {
    name: "DARKGREYB72",
    color: [84, 88, 90],
  },
  {
    name: "STEELGREYB91",
    color: [83, 86, 90],
  },
  {
    name: "GREY - B22",
    color: [112, 115, 114],
  },
  {
    name: "COOL GREY - B257",
    color: [136, 139, 141],
  },
  {
    name: "METAL GREY - B43",
    color: [179, 176, 196],
  },
  {
    name: "WHITESMOKE GREY - B2",
    color: [198, 188, 208],
  },
  {
    name: "LIGHT GREY - B194",
    color: [178, 180, 178],
  },
  {
    name: "SILVER - B44",
    color: [200, 201, 199],
  },
  {
    name: "OFFWHITEB46",
    color: [242, 242, 242],
  },
  {
    name: "WHITEPUREWHITE",
    color: [255, 255, 255],
  },
  {
    name: "DEEPCYANBLUEB236",
    color: [0, 62, 81],
  },
  {
    name: "BLUECYANB24",
    color: [0, 79, 113],
  },
  {
    name: "DARKTURQUOISEB96",
    color: [0, 118, 129],
  },
  {
    name: "TURQUOISEB224",
    color: [0, 178, 169],
  },
  {
    name: "AQUAB26",
    color: [0, 174, 199],
  },
  {
    name: "LIGHTAQUAB27",
    color: [153, 214, 234],
  },
  {
    name: "MIDNIGHTBLUEB74",
    color: [8, 31, 44],
  },
  {
    name: "FRENCHNAVYB8",
    color: [19, 41, 75],
  },
  {
    name: "DRESSBLUEB11",
    color: [21, 31, 109],
  },
  {
    name: "NAVYB99",
    color: [0, 30, 96],
  },
  {
    name: "DEEPROYALBLUEB14",
    color: [0, 53, 148],
  },
  {
    name: "CYANBLUEB28",
    color: [0, 156, 222],
  },
  {
    name: "AIRFORCEBLUEB13",
    color: [50, 98, 149],
  },
  {
    name: "CAROLINABLUEB118",
    color: [92, 136, 218],
  },
  {
    name: "SLATEBLUEB51",
    color: [128, 148, 221],
  },
  {
    name: "SKYBLUEB164",
    color: [108, 172, 228],
  },
  {
    name: "PALEBLUEB73",
    color: [146, 193, 233],
  },
  {
    name: "LIGHTSKYBLUEB248",
    color: [171, 202, 233],
  },
  {
    name: "INDIGOB478",
    color: [63, 42, 86],
  },
  {
    name: "PURPLEB114",
    color: [81, 45, 109],
  },
  {
    name: "BRIGHTPURPLEB167",
    color: [132, 50, 155],
  },
  {
    name: "EGGPLANTB39",
    color: [89, 49, 95],
  },
  {
    name: "DARKLAVENDERB246",
    color: [93, 71, 119],
  },
  {
    name: "PRIMARYPURPLEB66",
    color: [125, 85, 199],
  },

  {
    name: "LIGHTPURPLEB50",
    color: [137, 134, 202],
  },
  {
    name: "BLUEVIOLETB130",
    color: [97, 75, 121],
  },
  {
    name: "MAUVEBF15",
    color: [105, 60, 94],
  },
  {
    name: "LAVENDERB80",
    color: [165, 127, 178],
  },
  {
    name: "MEDIUMORCHIDB260",
    color: [167, 123, 202],
  },
  {
    name: "LIGHTORCHIDB225",
    color: [193, 160, 218],
  },
  {
    name: "MAGENTAB239",
    color: [165, 24, 144],
  },
  {
    name: "GRAPEB244",
    color: [114, 36, 108],
  },
  {
    name: "DARKMAUVEB40",
    color: [137, 59, 103],
  },
  {
    name: "PURPLEPINKB166",
    color: [221, 127, 211],
  },
  {
    name: "ORCHIDB258",
    color: [226, 172, 215],
  },
  {
    name: "POWDERPINKB207",
    color: [245, 182, 205],
  },
  {
    name: "PINKB208",
    color: [239, 149, 207],
  },
  {
    name: "CANDYPINKB184",
    color: [235, 111, 189],
  },
  {
    name: "PINKSALMONB256",
    color: [246, 117, 153],
  },
  {
    name: "SWEETPINKB274",
    color: [226, 69, 133],
  },
  {
    name: "HOTPINKB188",
    color: [202, 0, 93],
  },
  {
    name: "FUSCHIAB187",
    color: [208, 0, 111],
  },
  {
    name: "DARKGREENB331",
    color: [24, 48, 40],
  },
  {
    name: "DARKSAGEB98",
    color: [94, 116, 97],
  },
  {
    name: "BOTTLEGREENB333",
    color: [0, 99, 65],
  },
  {
    name: "AQUAGREENB141",
    color: [11, 115, 102],
  },
  {
    name: "ARMYGREENB29",
    color: [74, 65, 42],
  },
  {
    name: "HOLLYB140",
    color: [94, 103, 56],
  },
  {
    name: "PRIMARYGREENB376",
    color: [100, 167, 11],
  },
  {
    name: "SPRINGGREENB251",
    color: [108, 194, 74],
  },
  {
    name: "OLIVEGREENB176",
    color: [103, 130, 58],
  },
  {
    name: "KIWIB263",
    color: [156, 175, 136],
  },
  {
    name: "LIMEGREENB252",
    color: [196, 214, 0],
  },
  {
    name: "DIRTYGREENB186",
    color: [154, 149, 0],
  },
  {
    name: "DARKBROWNB276",
    color: [63, 32, 33],
  },
  {
    name: "BROWNB23",
    color: [78, 54, 41],
  },
  {
    name: "CHOCOLATEB78",
    color: [91, 52, 39],
  },
  {
    name: "SIENNAB76",
    color: [122, 62, 58],
  },
  {
    name: "BURNTSIENNAB132",
    color: [115, 56, 29],
  },
  {
    name: "CARAMELB156",
    color: [110, 76, 30],
  },
  {
    name: "SADDLEBROWNB104",
    color: [105, 63, 35],
  },
  {
    name: "HORSEBROWNB180",
    color: [174, 138, 121],
  },
  {
    name: "PEACHBROWNB86",
    color: [191, 148, 116],
  },
  {
    name: "BEIGEB242",
    color: [198, 170, 118],
  },
  {
    name: "MOUSEB241",
    color: [197, 183, 131],
  },
  {
    name: "DIRTYBROWNB75",
    color: [82, 71, 39],
  },
  {
    name: "WINEB38",
    color: [103, 33, 70],
  },
  {
    name: "PLUMB37",
    color: [155, 39, 67],
  },
  {
    name: "SWEETERREDB68",
    color: [166, 9, 61],
  },
  {
    name: "SWEETREDB1",
    color: [165, 0, 52],
  },
  {
    name: "REDB35",
    color: [186, 12, 47],
  },
  {
    name: "SALMONREDB272",
    color: [228, 0, 70],
  },
  {
    name: "TOMATOREDB34",
    color: [213, 0, 50],
  },
  {
    name: "TERACOTTAREDB159",
    color: [157, 34, 53],
  },
  {
    name: "MAROONREDB112",
    color: [111, 38, 61],
  },
  {
    name: "BURNTORANGEB58",
    color: [185, 71, 0],
  },
  {
    name: "CORALB273",
    color: [250, 70, 22],
  },
  {
    name: "SALMONB205",
    color: [224, 78, 57],
  },
  {
    name: "TANGERINEB264",
    color: [254, 80, 0],
  },
  {
    name: "PRIMARYORANGEB185",
    color: [255, 105, 0],
  },
  {
    name: "MANDERINB95",
    color: [190, 83, 28],
  },
  {
    name: "GOLDENORANGEB59",
    color: [237, 139, 0],
  },
  {
    name: "BROWNORANGEB60",
    color: [164, 90, 42],
  },
  {
    name: "TANGERINEGOLDB105",
    color: [232, 119, 34],
  },
  {
    name: "BURNTGOLDB139",
    color: [220, 134, 51],
  },
  {
    name: "DARK PEACHB259",
    color: [181, 133, 0],
  },
  {
    name: "GOLDB63",
    color: [241, 190, 72],
  },
  {
    name: "SUNSHINEB265",
    color: [207, 127, 0],
  },
  {
    name: "PEACHYELLOWB61",
    color: [255, 194, 123],
  },
  {
    name: "TANYELLOWB261",
    color: [214, 164, 97],
  },
  {
    name: "YELLOWB106",
    color: [251, 216, 114],
  },
  {
    name: "PSTELGREYB90",
    color: [133, 120, 116],
  },
  {
    name: "PASTELBEIGEB93",
    color: [225, 184, 127],
  },
  {
    name: "PASTELIVORYB47",
    color: [239, 219, 178],
  },
  {
    name: "PASTELPEAGREENB177",
    color: [183, 221, 121],
  },
  {
    name: "PATELLIMEB31",
    color: [230, 222, 119],
  },
  {
    name: "PASTELYELLOWB69",
    color: [248, 224, 142],
  },
  {
    name: "PASTELBLUEB84",
    color: [198, 214, 227],
  },
  {
    name: "PASTELPURPLEB52",
    color: [197, 180, 227],
  },
  {
    name: "PASTELLAVENDERB198",
    color: [234, 211, 226],
  },
  {
    name: "PASTELPEACHB62",
    color: [229, 158, 109],
  },
  {
    name: "PASTELSALMON B79",
    color: [234, 167, 148],
  },
  {
    name: "PASTELPINKB55",
    color: [242, 212, 215],
  },
];

export default colors;
