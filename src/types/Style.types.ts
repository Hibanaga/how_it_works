import { themes } from "../styles/theme";

export enum ContentDisplayVariants {
  inline = "inline-block",
  block = "block",
}

export type NavigationItemColorType = {
  color?: string;
};

export interface IAnimatedIconOptions {
  coloricon: string;
  topspacing: number;
  leftspacing: number;
  multiplesize: number;
  initialrotate: number;
}

export interface IPaperContainerOptions {
  spacing: number;
  multipleX: number;
  multipleY: number;
}

export interface IContentStyleOptions {
  display?: ContentDisplayVariants;
  size?: number;
  weight?: number;
  color?: string;
}
