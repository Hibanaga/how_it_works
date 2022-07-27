import { createTheme } from "@mui/material";
import { themes } from "./theme";

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: themes.breakpoints.xs,
      sm: themes.breakpoints.sm,
      md: themes.breakpoints.md,
      lg: themes.breakpoints.lg,
      xl: themes.breakpoints.xl,
    },
  },
});
