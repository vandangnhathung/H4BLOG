import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PostItem from "../post/PostItem";

const HomeRelated = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const docRef = query(collection(db, "posts"));
    onSnapshot(docRef, (snapshot) => {
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
  }, []);
  console.log(posts);
  if (posts.length <= 0) return null;
  return (
    <div className="container__homepage">
      <div className="grid-layout grid-layout--primary">
        {posts.map((item) => (
          <PostItem key={item.id} data={item}></PostItem>
        ))}
      </div>
    </div>
  );
};

export default HomeRelated;
