import Footer from "components/layout/Footer";
import Layout from "components/layout/Layout";
import TopUp from "components/topup/TopUp";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";
import HomeRelated from "module/home/HomeRelated";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
        <HomeRelated></HomeRelated>
        <Footer></Footer>
        <TopUp></TopUp>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
