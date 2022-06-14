import React from "react";
import config from "@lib/config";
import tw, { css } from "twin.macro";
import { FaGit, FaSpotify } from "react-icons/fa";

function IconHoverer({ children }) {
  return (
    <div
      css={[
        tw`flex items-center justify-center p-2 bg-white rounded-full hover:shadow-xl`,
      ]}
    >
      {children}
    </div>
  );
}

export function SocialList({}) {
  return (
    <div css={[tw`flex items-center justify-end`]}>
      <div css={[tw`flex px-4 py-2 space-x-4 shadow-md bg-primary-200`]}>
        {config.github_account && (
          <a
            title="GitHub"
            href={`https://github.com/${config.github_account}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconHoverer>
              <FaGit width={24} height={24} />
            </IconHoverer>
          </a>
        )}
        {config.spotify_account && (
          <a
            title="Spotify"
            href="https://open.spotify.com/user/aryan-mann"
            target="_blank"
            rel="noreferrer"
          >
            <IconHoverer>
              <FaSpotify width={24} height={24} />
            </IconHoverer>
          </a>
        )}
      </div>
    </div>
  );
}
