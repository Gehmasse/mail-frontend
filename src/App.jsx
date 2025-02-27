import { useState } from "react";
import Mails from "./Mails";
import { useAuth } from "./AuthProvider";

export default function App() {
  const [password, setPassword] = useState("");

  const { register, token } = useAuth();

  function onSubmit(e) {
    e.preventDefault();

    register(password);
  }

  if (!token) {
    return (
      <form onSubmit={onSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    );
  }

  return <Mails />;
}
