import React, { useMemo } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

export const useSelectSVG = (variant: string) => {
  return useMemo(() => {
    switch (variant) {
      case "appleIcon":
        return <AppleIcon color="inherit" />;
      case "cameraAltWindow":
        return <CameraAltIcon color="inherit" />;
      case "attachFile":
        return <AttachFileIcon color="inherit" />;
      case "formatSize":
        return <FormatSizeIcon color="inherit" />;
      case "autoAwesomeMosaic":
        return <AutoAwesomeMosaicIcon color="inherit" />;
      default:
        return <></>;
    }
  }, [variant]);
};
