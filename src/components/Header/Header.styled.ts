import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import { MediaQueries } from "../../styles/Global.styled";
import { themes } from "../../styles/theme";

export const Container = styled(Grid)`
  height: 80px;

  background-color: ${themes.colors.howDefault};
  margin-top: 25px;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled(Grid)`
  margin: 0 auto;
`;

export const Wrapper = styled(MediaQueries)`
  margin: 0 auto;
  width: 85%;
`;
