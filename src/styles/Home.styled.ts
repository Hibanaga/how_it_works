import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "./theme";

export const Container = styled(Box)`
  min-height: 70vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${themes.colors.baseWhite};
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
