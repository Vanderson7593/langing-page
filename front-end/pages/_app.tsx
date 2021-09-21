import { Theme, theme } from "client/design/theme";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "@styles";
import SnackbarProvider from "react-simple-snackbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme as Theme}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
