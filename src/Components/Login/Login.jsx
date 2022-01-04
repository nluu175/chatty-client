import { useState } from "react";
import loginService from "./../services/login";

const Login = (props) => {
  const { setToken } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        const user = await loginService.login({
          username,
          password,
        });

        console.log(user);
        // SET TOKEN
        setToken(user.token);

        // setUser
        setUser(user);
        setUsername("");
        setPassword("");
      } catch (exception) {
        console.log("Wrong credentials");
        setTimeout(() => {
          console.log(null);
        }, 5000);
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-contain bg-blue-300 h-screen ">
      <form onSubmit={handleLogin}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Login</button>
          <p>Don't have an account? Sign Up!</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
