import styled from "styled-components";
import slugify from "slugify";
import React, { useEffect, useState } from "react";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import PostCategory from "./PostCategory";
import { withErrorBoundary } from "react-error-boundary";
import { useAuth } from "contexts/auth-context";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      color: #fff !important;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;
const PostStoragePost = ({ id }) => {
  // console.log(id);
  const [postData, setpostData] = useState({});
  useEffect(() => {
    (async () => {
      const colRef = doc(db, "posts", id);
      console.log(colRef);
      const snapshot = await getDoc(colRef);
      setpostData({ id: snapshot.id, ...snapshot.data() });
    })();
  }, []);
  console.log(postData);
  if (!postData || !postData.id) return null;
  const date = postData?.createdAt?.seconds
    ? new Date(postData?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = postData;
  return (
    <PostFeatureItemStyles>
      <PostImage url={postData?.image} alt="unsplash"></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {category?.name && (
            <PostCategory to={category.slug}>{category.name}</PostCategory>
          )}
          <PostMeta
            color="white"
            to={slugify(user?.username || "", { lower: true })}
            authorName={user?.fullname}
            date={formatDate}
          ></PostMeta>
        </div>
        <PostTitle to={postData?.slug} size="big">
          {postData?.title}
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};
// Example of error boundary
export default withErrorBoundary(PostStoragePost, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">
      Look like this component error
    </p>
  ),
});
