import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "./theme";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  height: 100%;
`;

export const Content = styled(Typography)`
  color: ${themes.colors.baseWhite};
  text-transform: uppercase;
`;
