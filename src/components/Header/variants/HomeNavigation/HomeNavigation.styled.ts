import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../../../styles/theme";
import { NavigationItemColorType } from "../../../../types/Style.types";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled(Box)`
  display: flex;
  align-items: center;
`;

export type NavigationWrapperSpacingType = {
  leftSpacing?: number;
};

export const NavigationWrapper = styled(Box)`
  display: flex;
  align-items: center;

  margin-left: ${({ leftSpacing }: NavigationWrapperSpacingType) =>
    leftSpacing ? `${leftSpacing * 5}%` : 0};
`;

export const NavigationItemWrapper = styled(Box)`
  margin: 0 8px;
`;

export const NavigationItem = styled(Typography)`
  color: ${({ color }: NavigationItemColorType) =>
    color ? color : themes.colors.baseWhite};
  white-space: nowrap;

  && {
    cursor: pointer;
    font-size: ${themes.font.sizes.tertiaryMiddle}px;
    transition: 150ms ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const ImageWrapper = styled(Box)`
  height: 38px;
  min-width: 64px;
  overflow: hidden;
  position: relative;
`;

export const Separator = styled(Box)`
  width: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 48px;
  margin: 0 16px;
`;

export const ContactButton = styled(Button)`
  background-image: linear-gradient(90deg, #a770ef, #cf8bf3, #fdb99b);

  && {
    padding: 12px 36px;
    transition: 250ms ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const ButtonContent = styled(Typography)`
  color: ${themes.colors.baseWhite};

  && {
    font-weight: ${themes.font.weight.semiBold};
  }
`;
