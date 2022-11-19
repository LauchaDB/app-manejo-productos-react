import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const { username, setUsername } = useState([]);
  const { password, setPassword } = useState([]);
  const { user, setUser } = useState([false]);

  const handlerLogin = (e) => {
    e.preventDefault();
  };

  const handlerChange = () => {
    alert("anda tambien");
  };

  return (
    <div class="login">
      <h1>Login</h1>
      <form method="post">
        <input
          className="inputLogin"
          type="text"
          name="u"
          placeholder="Username"
          required="required"
          onChange={(target) => setUsername(target.value)}
        />
        <input
          className="inputLogin"
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          onChange={(target) => setPassword(target.value)}
        />
        <button
          type="submit"
          class="btn btn-primary btn-block btn-large"
          onClick={handlerLogin}
        >
          Iniciar secion
        </button>
      </form>
    </div>
  );
}
