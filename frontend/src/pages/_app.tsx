import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";
import createEmotionCache from "@/styles/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();
type PbAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: PbAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
