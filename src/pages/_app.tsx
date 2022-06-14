import { AppProps } from "next/app";
import tw, { GlobalStyles } from "twin.macro";
import { Global, css } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Global
        styles={css`
          a {
            color: #00489c;
          }
          a:hover {
            color: #9a0505;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
