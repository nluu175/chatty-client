import { useState } from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-contain bg-blue-300 h-screen ">
      <form>
        <label>
          <p>Username</p>
          <input type="text" name="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <div>
          <button>Login</button>
          <p>Don't have an account? Sign Up!</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
