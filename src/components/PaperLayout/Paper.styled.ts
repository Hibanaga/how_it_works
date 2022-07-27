import { Box } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../styles/theme";
import { IPaperContainerOptions } from "../../types/Style.types";

export const Container = styled(Box)`
  background-color: ${themes.colors.howLighther};
  border-radius: 16px;

  padding: ${({ spacing, multipleX, multipleY }: IPaperContainerOptions) =>
    `${spacing * multipleX}px ${spacing * multipleY}px`};
`;
