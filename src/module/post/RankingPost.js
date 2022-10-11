import Heading from "components/layout/Heading";
import { useAuth } from "contexts/auth-context";
import { db } from "firebase-app/firebase-config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PostRanked from "./PostRanked";

const RankingPost = () => {
  const { userInfo } = useAuth();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      // console.log(querySnapshot);
      let temp = [];
      const querySnapshot = await getDocs(colRef);
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });
      await setPosts(temp);
    }
    fetchData();
  }, []);
  if (!posts) return null;
  console.log(posts);
  const arrRank = [];
  const getRank = async () => {
    posts.forEach((item, i) => {
      const rankPost = item.likeNumber || "";
      const rankPostArr = rankPost.split(" ");
      arrRank.push(rankPostArr.length);
    });
  };
  getRank();
  const ranking = arrRank.sort(function (a, b) {
    return b - a;
  });
  let getRankSorted = [];
  console.log(posts[0], "38");
  const renderRank = async () => {
    for (let i = 0; i < ranking.length; i++) {
      for (let j = 0; j < posts.length; j++) {
        const rankPost = posts[j].likeNumber || "";
        const rankPostArr = rankPost.split(" ");
        if (ranking[i] === rankPostArr.length) {
          // console.log(i);
          getRankSorted.push(posts[j].id);
          break;
          // console.log(posts[i].id, "iddd");
        }
      }
    }
    // posts.forEach((item, indexGuard) => {
    // });
  };
  renderRank();
  console.log(getRankSorted, "asdas");
  // console.log(ranking, "sort");
  // console.log(posts, "posts");
  // console.log(ranking, "ranking");
  return (
    <div className="container__homepage ">
      <div className="pt-36">
        <Heading>Top rank</Heading>
        <div className="grid-layout mb-14">
          {getRankSorted.map((id) => (
            <PostRanked key={id} id={id}></PostRanked>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingPost;
