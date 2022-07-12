import { Box, Icon } from "@mui/material";
import styled from "styled-components";
import { IAnimatedIconOptions } from "../../types/Style.types";

export const Container = styled(Box)`
  width: 560px;
  height: 360px;

  border-radius: 12.5%;
  overflow: hidden;
  position: relative;
`;

export const AnimatedIconWrapper = styled(Icon)`
  position: absolute;
  z-index: 1;
  top: ${({ topSpacing }: IAnimatedIconOptions) => `${topSpacing}%`};
  left: ${({ leftSpacing }: IAnimatedIconOptions) => `${leftSpacing}%`};
  color: ${({ colorIcon }: IAnimatedIconOptions) => colorIcon};

  && {
    min-height: ${({ multipleSize }: IAnimatedIconOptions) =>
      `${12 * multipleSize}px`};
    min-width: ${({ multipleSize }: IAnimatedIconOptions) =>
      `${12 * multipleSize}px`};
  }

  & svg {
    font-size: ${({ multipleSize }: IAnimatedIconOptions) =>
      `${12 * multipleSize}px`};
  }
`;
