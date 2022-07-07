import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../../styles/theme";

export const Container = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Title = styled(Typography)`
  font-size: ${themes.font.sizes.fourfold}px;
  font-weight: ${themes.font.weight.semiBold};
  text-align: center;
  color: ${themes.colors.benjiBlue};
`;

export const Row = styled(Box)`
  display: flex;
  align-items: center;
`;

export const ButtonPrimary = styled(Button)``;

export const Counter = styled(Typography)`
  padding-left: 16px;
`;
