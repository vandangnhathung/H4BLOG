import Heading from "components/layout/Heading";
import { useAuth } from "contexts/auth-context";
import PostFeatureItem from "module/post/PostFeatureItem";
import PostStoragePost from "module/post/PostStoragePost";
import React from "react";

const StoredPost = () => {
  const { userInfo } = useAuth();
  // console.log();
  const newArrStoragePost = userInfo?.storagePost || "";
  const newArrStoragePost2 = newArrStoragePost.split(" ");

  // console.log(newArrStoragePost2);
  return (
    <div>
      <Heading>Storage posts</Heading>
      <div className="grid-layout">
        {newArrStoragePost2.map((id) => (
          <PostStoragePost key={id} id={id}></PostStoragePost>
        ))}
      </div>
    </div>
  );
};

export default StoredPost;
