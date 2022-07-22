import React from "react";
import homeWelcomeImg from "../../../public/home-welcome.jpg";
import { animatedFrameAnimations as frames } from "../../consts/frames";
import { useSelectSVG } from "../../hooks/useSelectSVG";
import { IAnimatedFramesOptions } from "../../types/Consts.types";
import ImagePreview from "../ImagePreview";
import * as StyledThisComp from "./HomeFrame.styled";

const HomeFrame = () => {
  const renderAnimatedFrames = (variants: IAnimatedFramesOptions[]) => {
    return variants.map(
      ({ icon, tooltip, ...options }: IAnimatedFramesOptions) => {
        const svgIcon = useSelectSVG(icon);
        return (
          <StyledThisComp.IconTooltip
            title={tooltip}
            placement="top"
            arrow
            enterDelay={150}
            key={icon}
          >
            <StyledThisComp.AnimatedIconWrapper {...options}>
              {svgIcon}
            </StyledThisComp.AnimatedIconWrapper>
          </StyledThisComp.IconTooltip>
        );
      }
    );
  };

  return (
    <StyledThisComp.Container>
      {renderAnimatedFrames(frames)}
      <ImagePreview
        src={homeWelcomeImg}
        alt="main logo big image"
        loading="eager"
        layout="fill"
      />
    </StyledThisComp.Container>
  );
};

export default HomeFrame;
