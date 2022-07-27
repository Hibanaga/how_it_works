import { Typography } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../styles/theme";
import { IContentStyleOptions } from "../../types/Style.types";

export const Wrapper = styled(Typography)`
  display: ${({ display }: IContentStyleOptions) => display ?? "inherit"};
  font-size: ${({ size }: IContentStyleOptions) =>
    !!size ? `${Number(size)}px` : `inherit`};
  font-weight: ${({ weight }: IContentStyleOptions) =>
    weight ?? themes.font.weight.normal};
  color: ${({ color }: IContentStyleOptions) => color ?? "inherit"};
`;
