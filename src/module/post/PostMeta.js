import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.color === "white" ? "#fff" : "#6b6b6b")};
  .post {
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
  }
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
    gap: 6px;
  }
`;

const PostMeta = ({
  date = "Mar 23",
  authorName = "Andiez Le",
  className = "",
  to = "",
  color = "grey",
}) => {
  return (
    <PostMetaStyles
      color={color}
      className={`post-meta mb-[48px] ${className}`}
    >
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <Link to={`/author/${to}`}>
        <span className="post-author">{authorName}</span>
      </Link>
    </PostMetaStyles>
  );
};

export default PostMeta;
