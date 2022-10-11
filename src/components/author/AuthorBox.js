import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const AuthorBox = ({ userId = "" }) => {
  const [user, setUser] = useState({});
  const [following, setFollowing] = useState(false);

  // console.log(user);
  useEffect(() => {
    async function fetchUserData() {
      const docRef = doc(db, "users", userId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        setUser(docSnapshot.data());
      }
    }
    fetchUserData();
  }, [userId]);
  if (!userId || !user.username) return null;
  return (
    <div className="author">
      <div className="author-image">
        <img src={user?.avatar} alt="" />
      </div>
      <div className="author-content bg-[#F8F9FA] border rounded-lg">
        <div className="flex items-end justify-between">
          <h3 className="author-name text-[#23BB86]">{user?.fullname}</h3>
          <button
            className={`px-7 py-3 bg-[#F8F9FA] transition-all duration-200 border shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#F8F9FA]  ${
              following
                ? "bg-[#50DFAD] hover:-translate-y-1 hover:shadow-md hover:border-[#50DFAD]"
                : ""
            } ${following ? "text-[#fff]" : ""} border-[#50DFAD] rounded-xl`}
            onClick={() => {
              setFollowing(!following);
            }}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
        <p className="author-desc">{user?.description}</p>
      </div>
    </div>
  );
};

export default AuthorBox;
