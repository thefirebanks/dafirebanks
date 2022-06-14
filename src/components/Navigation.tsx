import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import tw, { css } from "twin.macro";
import { FaHamburger } from "react-icons/fa";

export default function Navigation() {
  const router = useRouter();
  const [isMenuHidden, setMenuHidden] = useState(true);

  return (
    <>
      <div
        css={[
          tw`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-secondary-800 md:hidden`,
          isMenuHidden && tw`hidden`
        ]}
      >
        <ul
          css={[
            tw`static p-0 m-0 space-y-4 list-none`,
            css`
              & li a {
                ${tw`text-4xl text-white no-underline`}
              }
            `,
          ]}
        >
          <li>
            <img alt="logo with the words Aryan Mann" src={"/images/am_logo_black.png"} width={170} height={72} />
          </li>
          <li>
            <Link href="/" passHref={true}>
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/resume.pdf" passHref={true}>
              <a>resume</a>
            </Link>
          </li>
          <li>
            <Link href="/posts" passHref={true}>
              <a>blog</a>
            </Link>
          </li>
        </ul>
      </div>
      <div
        css={[
          tw`fixed flex items-center justify-center w-12 h-12 text-white transition-all duration-200 rounded-md cursor-pointer bg-primary-800 hover:bg-primary-500 top-6 right-10 md:hidden`,
          !isMenuHidden && tw`rotate-45 bg-primary-500 hover:bg-primary-800` 
        ]}
        onClick={() => setMenuHidden(!isMenuHidden)}
      >
        <FaHamburger />
      </div>
    </>
  );
}
