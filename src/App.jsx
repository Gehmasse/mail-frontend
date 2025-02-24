import { useState } from "react";
import Mails from "./Mails";
import fetcher from "./fetcher";
import { login } from "./auth";

export default function App() {
  const [password, setPassword] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState();

  function onSubmit(e) {
    e.preventDefault();

    fetcher(
      `register&password=${password}`,
      (data) => {
        if (data.status) {
          setToken(data.token);
          login(data.token);
        } else {
          setError(true);
        }
      },
      () => setError(true),
      () => {}
    );
  }

  return (
    <main className="flex relative flex-col justify-center items-center p-7 min-h-screen shadow-lg dark:bg-gray-900 dark:text-gray-400">
      {error && !token && "Invalid Password"}

      {token ? (
        <Mails />
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      )}
    </main>
  );
}
