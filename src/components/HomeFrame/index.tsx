import React, { useMemo } from "react";
import homeWelcomeImg from "../../../public/home-welcome.jpg";
import { useSelectSVG } from "../../hooks/useSelectSVG";
import { themes } from "../../styles/theme";
import { IAnimatedFramesOptions } from "../../types/Consts.types";
import ImagePreview from "../ImagePreview";
import * as StyledThisComp from "./HomeFrame.styled";

const animatedFrameAnimations: IAnimatedFramesOptions[] = [
  {
    icon: "appleIcon",
    colorIcon: themes.colors.prussianBlue100,
    topSpacing: 5,
    leftSpacing: 5,
    multipleSize: 1,
  },
  {
    icon: "cameraAltWindow",
    colorIcon: themes.colors.prussianBlue200,
    topSpacing: 15,
    leftSpacing: 15,
    multipleSize: 1.15,
  },
  {
    icon: "attachFile",
    colorIcon: themes.colors.prussianBlue300,
    topSpacing: 25,
    leftSpacing: 25,
    multipleSize: 1.3,
  },
  {
    icon: "formatSize",
    colorIcon: themes.colors.prussianBlue400,
    topSpacing: 35,
    leftSpacing: 35,
    multipleSize: 1.45,
  },
  {
    icon: "autoAwesomeMosaic",
    colorIcon: themes.colors.prussianBlue500,
    topSpacing: 45,
    leftSpacing: 45,
    multipleSize: 1.65,
  },
];

const HomeFrame = () => {
  const renderAnimatedFrames = (variants: IAnimatedFramesOptions[]) => {
    return useMemo(() => {
      return variants.map(({ icon, ...options }: IAnimatedFramesOptions) => {
        const svgIcon = useSelectSVG(icon);
        return (
          <StyledThisComp.AnimatedIconWrapper key={icon} {...options}>
            {svgIcon}
          </StyledThisComp.AnimatedIconWrapper>
        );
      });
    }, []);
  };

  return (
    <StyledThisComp.Container>
      {renderAnimatedFrames(animatedFrameAnimations)}
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
