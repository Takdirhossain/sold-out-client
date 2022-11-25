import React, { useContext } from "react";
import { AuthContext } from "../context/Allcontext";

const Welcome = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className=" mt-48">
      <h1 class="flex content-center justify-center font-semibold text-5xl text-purple-600">
        Hello <span class="animate-waving-hand">👋🏻</span>, {user?.displayName}
      </h1>
    </div>
  );
};

export default Welcome;
