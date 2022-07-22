import React from "react";
import { ThemeProvider } from "@mui/material";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { muiTheme } from "../styles/muiTheme";
import createEmotionCacheHelper from "../utils/createEmotionCache.helper";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCacheHelper();

interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
