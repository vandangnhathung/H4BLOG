import Footer from "components/layout/Footer";
import Layout from "components/layout/Layout";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";
import HomeRelated from "module/home/HomeRelated";
import RankingPost from "module/post/RankingPost";
import React from "react";

const TopRank = () => {
  return (
    <>
      <Layout>
        <RankingPost></RankingPost>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default TopRank;
