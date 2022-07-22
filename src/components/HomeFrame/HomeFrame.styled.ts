import { Box, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import { IAnimatedIconOptions } from "../../types/Style.types";

export const Container = styled(Box)`
  width: 560px;
  height: 360px;

  border-radius: 12.5%;
  overflow: hidden;
  position: relative;
`;

export const IconTooltip = styled(Tooltip)`
  transition: 250ms ease-in-out;

  && {
    transition: 250ms ease-in-out;
  }
`;

export const AnimatedIconContainer = styled(Box)``;

export const AnimatedIconWrapper = styled(IconButton)`
  position: absolute;
  z-index: 1;
  top: ${({ topspacing }: IAnimatedIconOptions) => `${topspacing}%`};
  left: ${({ leftspacing }: IAnimatedIconOptions) => `${leftspacing}%`};
  transform: rotate(
    ${({ initialrotate }: IAnimatedIconOptions) => `${initialrotate}deg`}
  );

  && {
    color: ${({ coloricon }: IAnimatedIconOptions) => coloricon};
    min-height: ${({ multiplesize }: IAnimatedIconOptions) =>
      `${16 * multiplesize}px`};
    min-width: ${({ multiplesize }: IAnimatedIconOptions) =>
      `${16 * multiplesize}px`};
    transition: 250ms ease-in-out;

    &:hover {
      transform: rotate(0deg);
    }
  }

  & svg {
    font-size: ${({ multiplesize }: IAnimatedIconOptions) =>
      `${16 * multiplesize}px`};
  }
`;
