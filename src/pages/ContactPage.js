import Footer, { Contact } from "components/layout/Footer";
import Layout from "components/layout/Layout";
import ContactElement from "module/contact/ContactElement";
import RankingPost from "module/post/RankingPost";
import React from "react";

const ContactPage = () => {
  return (
    <Layout>
      <ContactElement></ContactElement>
      <Footer></Footer>
    </Layout>
  );
};

export default ContactPage;
