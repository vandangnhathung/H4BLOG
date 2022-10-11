import React from "react";
import styled from "styled-components";

export const FooterStyle = styled.div`
  font-family: "Montserrat", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00b4aa;
  color: #fff;
`;
export const Inf = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 27px;
  text-align: left;
  margin-left: 20px;
  color: #fff;
  gap: 17px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #fff;
  gap: 17px;
`;

export const Prof = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 17px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-gap: 60px;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  color: #fff;
  padding: 70px 0;
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 10px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
`;
export const Heading = styled.p`
  font-size: 24px;
  color: 000000;
  color: #fff;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Row>
        <Inf>
          <Heading>ABOUT US</Heading>
          <FooterLink>
            H4Blog là một trang web chia sẻ các kiến thức cho các bạn học sinh,
            sinh viên. Nơi đây các bạn có thể chia sẻ những mẹo vặt hay, những
            bài viết ý nghĩa ở mọi lĩnh vực khác nhau cho mọi người xung quanh.
          </FooterLink>
          <FooterLink>
            Trang web giúp bạn chia sẻ mọi lúc, mọi nơi đồng thời nâng cao kinh
            nghiệm, trau dồi kiến thức để phát triển bản thân nhiều hơn và hoàn
            toàn miễn phí cho người sử dụng.
          </FooterLink>
        </Inf>

        <Contact>
          <Heading>CONTACT US</Heading>
          <FooterLink>Điện thoại: 0246.329.1102</FooterLink>
          <FooterLink>Email: H4BLOG@gmail.com</FooterLink>
          <FooterLink>
            Địa chỉ: Khu phố 6, phường Linh Trung, Thủ Đức, Thành phố Hồ Chí
            Minh
          </FooterLink>
        </Contact>

        <Prof>
          <Heading>PROFILE</Heading>
          <FooterLink>My account</FooterLink>
          <FooterLink>Wishlist</FooterLink>
        </Prof>
      </Row>
    </FooterStyle>
  );
};

export default Footer;
