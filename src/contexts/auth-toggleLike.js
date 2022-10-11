// import { auth, db } from "firebase-app/firebase-config";
// import { onAuthStateChanged } from "firebase/auth";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const { createContext, useContext, useState, useEffect } = require("react");

// const LikeContext = createContext();
// function LikeProvider(props) {
//   const [valuesLike, setValuesLike] = useState(false);
//   const [userInfo, setUserInfo] = useState({});
//   const value = { userInfo, setUserInfo };

//   return <LikeContext.Provider value={value} {...props}></LikeContext.Provider>;
// }
// function useLike() {
//   const context = useContext(LikeContext);
//   if (typeof context === "undefined")
//     throw new Error("useLike must be used within LikeProvider");
//   return context;
// }
// export { LikeProvider, useLike };
