import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../../../styles/theme";
import { NavigationItemColorType } from "../../../../types/Style.types";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

export const Row = styled(Box)`
  display: flex;
  align-items: center;
`;

export const NavigationWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

export const NavigationItemWrapper = styled(Box)`
  margin: 0 8px;
`;

export const NavigationItem = styled(Typography)`
  color: ${({ color }: NavigationItemColorType) =>
    !!color ? color : themes.colors.baseWhite};

  && {
    cursor: pointer;
    font-size: ${themes.font.sizes.tertiaryMiddle}px;
    transition: 150ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ImageWrapper = styled(Box)``;

export const Separator = styled(Box)`
  width: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 40px;
  margin: 0 16px;
`;
