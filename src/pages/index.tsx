import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@meta/OpenGraphMeta";
import TwitterCardMeta from "@meta/TwitterCardMeta";
import { SocialList } from "@components/SocialList";
import tw, { css } from "twin.macro";

export default function Index() {
  return (
    <Layout.Default>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div css={[tw`max-w-lg`]}>
        <div css={[tw`flex items-center py-4 space-x-8`]}>
          <img
            alt="face of aryan mann"
            css={[tw`rounded-full shadow-xl max-h-24`]}
            src="https://avatars.githubusercontent.com/u/18741614"
          />
          <h1 css={[tw`text-4xl`]}>hi! i am aryan mann.</h1>
        </div>
        <h3 css={[tw`py-2 text-xl text-center`]}>
          this website has stuff about me and the work ive done.
        </h3>
        <div css={[tw`relative px-4 pt-6 pb-4 mt-10 mb-2 bg-secondary-50`]}>
          <p
            css={[
              tw`absolute left-4 top-[-20px] rounded-sm bg-primary-800 px-2 py-1 text-white`,
            ]}
          >
            working on..
          </p>
          currently im working in the <b>computer vision</b> team at{" "}
          <b>unity</b>, building a toolkit for generating synthetic data using
          the{" "}
          <b>
            <a href="https://github.com/Unity-Technologies/com.unity.perception">
              perception package
            </a>
          </b>
          . bounding boxes, instance segmentation, occlusion percentages, and
          that kind of stuff. find me pushing bug fixes, feature improvements,
          and more! but mostly that.
        </div>
        <SocialList />
        <h3 css={[tw`py-4 mt-8 text-xl`]}>
          quick summary (
          <a href="https://github.com/aryan-mann">longer one here</a>)
        </h3>
        <ul css={[tw`list-disc`]}>
          <li>
            <b>
              july 2021 to present
            </b>{" "}
            – working on enabling low-touch high-performance synthetic worlds
            that generate data for computer vision models.. i.e.{" "}
            <a href="https://github.com/Unity-Technologies/com.unity.perception">
              perception package
            </a>{" "}
            for Unity Technologies
          </li>
          <li>
            <b>june 2017 to may 2021</b> – studied computer science and
            philosopy at Grinnell College. favorite classes: philosophy of mind,
            automata theory, algorithms, metaphysics!
          </li>
          <li>
            <b>december 2018 to march 2020</b> – worked at the data analysis and
            social inquiry lab making information about alumni outcomes
            accessible to current students via an interactive React app
          </li>
          <li>
            <b>april 2016 to june 2018</b> – worked on creating three beautiful
            websites via cutting edge web technologies such as React, NextJs,
            and SSG
            <ul css={tw`inline-flex flex-col ml-8`}>
              <li>
                - <a href="https://amchemproducts.com">amchemproducts.com</a>
              </li>
              <li>
                - <a href="https://drythane.com">drythane.com</a>
              </li>
              <li>
                - <a href="https://amshield.com">amshield.com</a>
              </li>
            </ul>
          </li>
          <li>
            <b>1990s to april 2016</b> – ¯\_(ツ)_/¯
          </li>
        </ul>
        <h3 css={[tw`py-4 mt-8 text-xl`]}>todo list</h3>
        <ul css={tw`inline-flex flex-col ml-8 list-disc`}>
          <li>add posts about things</li>
          <li>add analytics to track your every movement muahaha</li>
          <li>remove remaining capital letters</li>
        </ul>
      </div>
    </Layout.Default>
  );
}
