import React, { FC, memo, ReactNode } from "react";
import { IContentStyleOptions } from "../../types/Style.types";
import { Wrapper } from "./Content.styled";

interface IContentProps extends IContentStyleOptions {
  children: ReactNode;
}

const Content: FC<IContentProps> = ({ children, ...options }) => {
  return <Wrapper {...options}>{children}</Wrapper>;
};

export default memo(Content);
