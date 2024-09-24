import React, { useState } from "react";

import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleHandler = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/PK-en-20240916-TRIFECTA-perspective_028cd98b-3ece-4b41-800b-1cfba7f1f558_large.jpg"
          alt="background"
        />
      </div>

      <form className="bg-black p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl p-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>

        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleHandler}>
          {signIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
