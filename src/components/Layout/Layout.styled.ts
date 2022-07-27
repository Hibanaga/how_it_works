import { Grid } from "@mui/material";
import styled from "styled-components";
import { MediaQueries } from "../../styles/Global.styled";
import { themes } from "../../styles/theme";

export const Container = styled(Grid)`
  background-color: ${themes.colors.howDefault};
  color: ${themes.colors.baseWhite};
  position: relative;
`;

export const Row = styled(Grid)``;

export const Wrapper = styled(MediaQueries)`
  width: 85%;
  margin: 0 auto;
`;
