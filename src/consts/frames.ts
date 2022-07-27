import { themes } from "../styles/theme";
import { IAnimatedFramesOptions } from "../types/Consts.types";

export const animatedFrameAnimations: IAnimatedFramesOptions[] = [
  {
    icon: "appleIcon",
    coloricon: themes.colors.prussianBlue100,
    topspacing: 5,
    leftspacing: 5,
    multiplesize: 3,
    initialrotate: 0,
    tooltip: "category 1",
  },
  {
    icon: "cameraAltWindow",
    coloricon: themes.colors.prussianBlue200,
    topspacing: 2.5,
    leftspacing: 15,
    multiplesize: 2,
    initialrotate: -15,
    tooltip: "category 2",
  },
  {
    icon: "attachFile",
    coloricon: themes.colors.prussianBlue300,
    topspacing: 75,
    leftspacing: 15,
    multiplesize: 3,
    initialrotate: 25,
    tooltip: "category 3",
  },
  {
    icon: "formatSize",
    coloricon: themes.colors.prussianBlue400,
    topspacing: 60,
    leftspacing: 25,
    multiplesize: 3.5,
    initialrotate: 45,
    tooltip: "category 4",
  },
  {
    icon: "autoAwesomeMosaic",
    coloricon: themes.colors.prussianBlue500,
    topspacing: 65,
    leftspacing: 35,
    multiplesize: 4.5,
    initialrotate: -45,
    tooltip: "category 5",
  },
  {
    icon: "architectureIcon",
    coloricon: themes.colors.prussianBlue500,
    topspacing: 20,
    leftspacing: 85,
    multiplesize: 3,
    initialrotate: 12,
    tooltip: "category 6",
  },
];
