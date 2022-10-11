import { async } from "@firebase/util";
import { useAuth } from "contexts/auth-context";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";

const Interaction = ({ postId = "" }) => {
  const [valuesLike, setValuesLike] = useState(false);
  const [getPost, setGetpost] = useState(null);
  const { userInfo } = useAuth();
  const isFirstRender = useRef(true);
  const [likeNum, setLikeNum] = useState(0);
  // const newGetPost = getPost?.likeNumber || "";
  const [likeN, setLikeN] = useState(
    getPost ? getPost?.likeNumber?.split(" ") : []
  );
  const newArr = likeN;
  // const [likeNToggle, setLikeNToggle] = useState();
  // getPost ? getPost?.toggleLike?.split(" ") : []
  // console.log(getPost.toggleLike);
  // const toggleArr = likeNToggle;
  // console.log(toggleArr);
  // console.log(userInfo.uid, "uid");
  // const checkToggleLike = () => {
  //   console.log(toggleArr);
  //   if (!toggleArr) {
  //     return;
  //   }
  //   console.log(1);
  //   toggleArr.forEach((id) => {
  //     console.log(id, "28");
  //     if (userInfo.uid === id) {
  //       setValuesLike(true);
  //     }
  //   });
  // };
  // const likeNumArr = 0;
  const removeIdFromLikeNumArr = (arr) => {
    arr?.length > 0 &&
      arr.forEach((item, index) => {
        if (item === userInfo.uid) {
          arr.splice(index, 1);
        }
      });
  };
  // console.log(getPost.likeNumber.split(" "));
  // console.log(valuesLike, "12312312");

  const handleLike = async () => {
    console.log(1);
    if (valuesLike) {
      console.log("work");
      const colRef = doc(db, "posts", postId);
      const postSpecified = await getDoc(colRef);
      await updateDoc(colRef, {
        ...postSpecified.data(),
        likeNumber: `${
          getPost?.likeNumber === ""
            ? userInfo.uid
            : postSpecified.data().likeNumber + " " + userInfo.uid
        }`,
        // toggleLike: `${
        //   getPost?.likeNumber === ""
        //     ? userInfo.uid
        //     : postSpecified.data().likeNumber + " " + userInfo.uid
        // }`,
      });
    } else {
      console.log("failed");
      const colRef = doc(db, "posts", postId);
      const postSpecified = await getDoc(colRef);
      removeIdFromLikeNumArr(newArr);
      // removeIdFromLikeNumArr(toggleArr);
      // console.log(newArr, "111111");
      const toStringLikeNumber = newArr.join(" ");
      // const toStringToggleLike = toggleArr.join(" ");
      await updateDoc(colRef, {
        ...postSpecified.data(),
        likeNumber: `${toStringLikeNumber}`,
        // toggleLike: `${toStringToggleLike}`,
      });
    }
  };
  // console.log(valuesLike, "33333");
  //STORED-VALUE!!!!!!!!!!!!!
  const [storeValues, setStoreValues] = useState(false);
  const newArrStoragePost = userInfo?.storagePost ? userInfo?.storagePost : "";
  const handleStored = async () => {
    console.log(storeValues, "123");
    if (storeValues === true) {
      console.log("failed");
      const colRef = doc(db, "users", userInfo.uid);
      const userSpecified = await getDoc(colRef);
      console.log(userSpecified.data());
      // removeIdFromLikeNumArr(toggleArr);
      // console.log(newArr, "111111");
      // const toStringToggleLike = toggleArr.join(" ");
      await updateDoc(colRef, {
        // toggleLike: `${toStringToggleLike}`,
        storagePost: `${
          userInfo?.storagePost === ""
            ? postId
            : userSpecified.data().storagePost + " " + postId
        }`,
      });
    } else {
      const colRef = doc(db, "users", userInfo.uid);
      const postSpecified = await getDoc(colRef);

      const postCheck =
        newArrStoragePost === ""
          ? ""
          : removeIdFromLikeNumArr(newArrStoragePost);
      // removeIdFromLikeNumArr(toggleArr);
      // console.log(newArr, "111111");
      const toStringStoragePost = postCheck === "" ? "" : postCheck.join(" ");
      // const toStringToggleLike = toggleArr.join(" ");
      await updateDoc(colRef, {
        ...postSpecified.data(),
        storagePost: `${toStringStoragePost}`,
        // toggleLike: `${toStringToggleLike}`,
      });
    }
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if first render
    }
    async function asyncHandleLike() {
      console.log("handle");
      await handleLike();
      console.log(2);
      const colRef = await doc(db, "posts", postId);
      const postSpecified = await getDoc(colRef);
      await setGetpost({
        ...postSpecified.data(),
      });
      await setLikeN(
        getPost?.likeNumber === "" ? [] : getPost?.likeNumber?.split(" ")
      );
    }
    // setLikeNToggle(
    //   getPost?.toggleLike === "" ? [] : getPost?.toggleLike?.split(" ")
    // );
    asyncHandleLike();
  }, [valuesLike]);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if first render
    }
    async function asyncHandleLike() {
      console.log("handle");
      await handleStored();
      console.log(2);
      const colRef = await doc(db, "posts", postId);
      const postSpecified = await getDoc(colRef);
      await setGetpost({
        ...postSpecified.data(),
      });
    }
    // setLikeNToggle(
    //   getPost?.toggleLike === "" ? [] : getPost?.toggleLike?.split(" ")
    // );
    asyncHandleLike();
  }, [storeValues]);
  useEffect(() => {
    async function fetchData() {
      console.log("work 119");
      const colRef = await doc(db, "posts", postId);
      const postSpecified = await getDoc(colRef);

      await setGetpost({
        ...postSpecified.data(),
      });
      await setLikeN(
        getPost?.likeNumber === "" ? [] : getPost?.likeNumber?.split(" ")
      );

      // await checkToggleLike();
    }
    // setLikeNToggle(
    //   getPost?.toggleLike === "" ? [] : getPost?.toggleLike?.split(" ")
    // );
    // checkToggleLike();
    fetchData();
  }, []);
  useEffect(() => {
    if (getPost) {
      let temp =
        getPost?.likeNumber === "" ? [] : getPost?.likeNumber?.split(" ");
      setLikeNum(temp?.length);
    }
  }, [getPost]);

  return (
    <div className="flex items-center gap-x-3 justify-between">
      <div
        className="flex items-center gap-2"
        onClick={async () => {
          await setValuesLike(!valuesLike);
          await handleLike;
        }}
      >
        {valuesLike === true && (
          <svg
            width="45"
            height="35"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shadow-3xl p-2 rounded-full duration-500 hover:-translate-y-3  cursor-pointer transition-all"
          >
            <path
              d="M0.0622711 5.40086C0.0691613 3.95121 0.658627 2.56521 1.69804 1.5547C2.73746 0.544184 4.13953 -0.00597157 5.5888 0.0280112C7.30614 0.027348 8.9412 0.763703 10.0789 2.05015C11.2292 0.77497 12.8714 0.0547539 14.5887 0.0723305C16.0382 0.0526226 17.4348 0.61656 18.4642 1.63726C19.4936 2.65796 20.0694 4.0497 20.062 5.49935C20.0357 10.8553 13.6368 14.8678 10.0001 18.05C6.40304 14.8052 0.0358765 10.7608 0.0622711 5.40086Z"
              fill="#F53838"
            />
          </svg>
        )}
        {valuesLike === false && (
          <svg
            width="45"
            height="35"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shadow-sm hover:shadow-3xl transition-all duration-500 p-2 rounded-full cursor-pointer"
          >
            <path
              d="M0.0622711 5.40086C0.0691613 3.95121 0.658627 2.56521 1.69804 1.5547C2.73746 0.544184 4.13953 -0.00597157 5.5888 0.0280112C7.30614 0.027348 8.9412 0.763703 10.0789 2.05015C11.2292 0.77497 12.8714 0.0547539 14.5887 0.0723305C16.0382 0.0526226 17.4348 0.61656 18.4642 1.63726C19.4936 2.65796 20.0694 4.0497 20.062 5.49935C20.0357 10.8553 13.6368 14.8678 10.0001 18.05C6.40304 14.8052 0.0358765 10.7608 0.0622711 5.40086Z"
              fill="#999999"
            />
          </svg>
        )}
        <p className="font-semibold text-[#6B6B6B] text-lg">{likeNum}</p>
      </div>
      <div
        className="cursor-pointer"
        onClick={async () => {
          await setStoreValues(!storeValues);
          await handleStored;
        }}
      >
        {!storeValues && (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19L8 15.5L1 19V3Z"
              stroke="#999999"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {storeValues && (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19L8 15.5L1 19V3Z"
              fill="#FADF51"
              stroke="#FADF51"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default React.memo(Interaction);
