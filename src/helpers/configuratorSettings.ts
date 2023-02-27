import { IViewSetting } from "../interfaces/configurator";

const configuratorSettings = (type: string): IViewSetting[] => {
  switch (type) {
    case "plains":
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];
    case "PTN309":
    case "PTN310":
    case "PTN312":
    case "PTN318":
    case "CENT520":
    case "PLN802":
    case "PLN803":
    case "DOT701":
    case "DOT706":
    case "DOT707":
    case "STR301":
    case "STR307":
    case "STR312":
    case "STR313":
    case "STR324":
    case "STR327":
    case "STR328":
    case "STR329":
    case "STR330":
    case "Tartan003":
    case "STR326":
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "color",
          name: "colorOne",
          data: {
            en: "Color Set One",
            ru: "Набор цветов один",
          },
        },
        {
          type: "color",
          name: "colorTwo",
          data: {
            en: "Color Set Two",
            ru: "Набор цветов два",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];
    case "CENT507":
    case "Tartan001":
    case "Tartan005":
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "color",
          name: "colorOne",
          data: {
            en: "Color Set One",
            ru: "Набор цветов один",
          },
        },
        {
          type: "color",
          name: "colorTwo",
          data: {
            en: "Color Set Two",
            ru: "Набор цветов два",
          },
        },
        {
          type: "color",
          name: "colorThree",
          data: {
            en: "Color Set Three",
            ru: "Набор цветов три",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];
    case "CENT512":
    case "CENT516":
    case "CENT517":
    case "PLN804":
    case "PLN805":
    case "DOT702":
    case "DOT705":
    case "STR309":
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "color",
          name: "colorOne",
          data: {
            en: "Color Set One",
            ru: "Набор цветов один",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];

    case "Tartan004":
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "color",
          name: "colorOne",
          data: {
            en: "Color Set One",
            ru: "Набор цветов один",
          },
        },
        {
          type: "color",
          name: "colorTwo",
          data: {
            en: "Color Set Two",
            ru: "Набор цветов два",
          },
        },
        {
          type: "color",
          name: "colorThree",
          data: {
            en: "Color Set Three",
            ru: "Набор цветов три",
          },
        },
        {
          type: "color",
          name: "colorFour",
          data: {
            en: "Color Set Four",
            ru: "Набор цветов четыре",
          },
        },
        {
          type: "color",
          name: "colorFive",
          data: {
            en: "Color Set Five",
            ru: "Набор цветов пять",
          },
        },
        {
          type: "color",
          name: "colorSix",
          data: {
            en: "Color Set Six",
            ru: "Набор цветов шесть",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];
    case "Tartan002":
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "color",
          name: "colorOne",
          data: {
            en: "Color Set One",
            ru: "Набор цветов один",
          },
        },
        {
          type: "color",
          name: "colorTwo",
          data: {
            en: "Color Set Two",
            ru: "Набор цветов два",
          },
        },
        {
          type: "color",
          name: "colorThree",
          data: {
            en: "Color Set Three",
            ru: "Набор цветов три",
          },
        },
        {
          type: "color",
          name: "colorFour",
          data: {
            en: "Color Set Four",
            ru: "Набор цветов четыре",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];

    default:
      return [
        {
          type: "color",
          name: "bgColor",
          data: {
            en: "Apply Base Color",
            ru: "Выберите базовый цвет",
          },
        },
        {
          type: "weave",
          name: "weave",
          data: {
            en: "Weave",
            ru: "Плетение",
          },
        },
      ];
  }
};

export default configuratorSettings;
