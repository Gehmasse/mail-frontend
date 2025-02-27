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
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 px-10 my-5 rounded-3xl border dark:bg-violet-900 dark:text-violet-200 dark:border-violet-200"
        />

        <input
          type="submit"
          value="Login"
          className="p-3 px-10 my-5 rounded-3xl border cursor-pointer dark:bg-violet-900 dark:text-violet-200 dark:border-violet-200"
        />
      </form>
    );
  }

  return <Mails />;
}
