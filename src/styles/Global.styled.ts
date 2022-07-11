import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "./theme";

export const MediaQueries = styled(Box)`
  @media (min-width: ${themes.breakpoints.xl}px) {
    max-width: ${themes.breakpoints.xl}px;
  }

  @media (min-width: ${themes.breakpoints.md}px) {
    max-width: ${themes.breakpoints.md}px;
  }

  @media (min-width: ${themes.breakpoints.lg}px) {
    max-width: ${themes.breakpoints.lg}px;
  }

  @media (min-width: ${themes.breakpoints.xl}px) {
    max-width: ${themes.breakpoints.xl}px;
  }
`;
