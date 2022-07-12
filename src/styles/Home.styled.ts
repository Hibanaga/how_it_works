import { Box, Icon, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "./theme";

export const Container = styled(Box)`
  min-height: 60vh;
  height: 100%;

  width: 85%;
  margin: 0 auto;
  color: ${themes.colors.baseWhite};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperContent = styled(Box)`
  display: flex;
  flex-direction: column-reverse;
`;

export const Heading = styled(Typography)`
  && {
    background-image: linear-gradient(90deg, #ff934f, #dac760);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: ${themes.font.weight.bold};
  }
`;

export const SubHeading = styled(Typography)`
  color: ${themes.colors.baseWhite};
`;

export const WrapperImage = styled(Icon)`
  && {
    min-height: 256px;
    min-width: 256px;
  }

  & svg {
    font-size: 256px;
  }
`;
