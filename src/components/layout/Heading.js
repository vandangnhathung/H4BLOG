import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.h2`
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 600;
  display: inline-block;
  color: #23bb86;
  line-height: calc(36px / 28px);
  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 35%;
    height: 4px;
    left: 0;
    top: -10%;
    background-color: #00d1ed;
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
