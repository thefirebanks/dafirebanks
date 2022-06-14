import Head from "next/head";
import Navigation from "./Navigation";
import tw, { css } from "twin.macro";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export function Default({ children }: Props) {
  return (
    <div css={[tw`w-screen h-screen`]}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main
        css={[
          tw`flex flex-col items-center justify-center px-8 pt-24 pb-6 md:py-16 xl:py-24`,
        ]}
      >
        <div css={[tw`flex flex-col items-center justify-center pb-16`]}>
          <img alt="logo with the words Aryan Mann" src="/images/am_logo_black.png" width={170} height={72} />
          <div
            css={[
              tw`pt-12 space-x-8`,
              css`
                & > a {
                  ${tw`px-4 py-2 bg-primary-200 hover:bg-primary-400`}
                }
              `,
            ]}
          >
            <Link href="/" passHref={true}>
              <a>home</a>
            </Link>
            <Link href="/resume.pdf" passHref={true}>
              <a>resume</a>
            </Link>
            <Link href="/posts" passHref={true}>
              <a>blog</a>
            </Link>
          </div>
        </div>
        {children}
      </main>
      <Navigation />
    </div>
  );
}

const Layout = {
  Default,
};
export default Layout;
