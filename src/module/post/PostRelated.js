import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

const PostRelated = ({ categoryId = "", postInfoId = "" }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const docRef1 = query(
      collection(db, "posts"),
      where("category.id", "==", categoryId)
    );
    onSnapshot(docRef1, (snapshot) => {
      const results = [];
      // console.log(snapshot);
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, [categoryId]);
  console.log(posts);
  if (!categoryId || posts.length <= 0) return null;
  return (
    <div className="post-related">
      <Heading>Bài viết liên quan</Heading>
      <div className="grid-layout grid-layout--primary">
        {posts.map((item, i) => {
          if (i !== 0) {
            return <PostItem key={item.id} data={item}></PostItem>;
          }
        })}
      </div>
    </div>
  );
};

export default PostRelated;
