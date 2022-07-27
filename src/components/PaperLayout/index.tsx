import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "./Paper.styled";

interface IPaperLayoutProps {
  spacing?: number;
  multipleX?: number;
  multipleY?: number;
  children?: ReactNode;
}

const PaperLayout: FC<IPaperLayoutProps> = ({
  children,
  spacing = 1,
  multipleX = 4,
  multipleY = 8,
}) => {
  return (
    <StyledThisComp.Container
      spacing={spacing}
      multipleX={multipleX}
      multipleY={multipleY}
    >
      {children}
    </StyledThisComp.Container>
  );
};

export default PaperLayout;
