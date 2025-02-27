import { useState } from "react";
import Loading from "./Loading";
import MailRow from "./MailRow";

import { useFetch } from "./useFetch";
import { useAuth } from "./AuthProvider";

export default function Mails() {
  const [limit, setLimit] = useState(20);

  const { data, loading, error } = useFetch(`mails&limit=${limit || 20}`);
  const { logout } = useAuth();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex flex-col gap-5 mb-5 md:gap-10 md:flex-row">
        <div className="flex flex-row gap-5 p-3 px-10 rounded-3xl border dark:bg-violet-900 dark:text-violet-200 dark:border-violet-200">
          <button onClick={() => setLimit(20)}>20</button>
          <button onClick={() => setLimit(20)}>50</button>
          <button onClick={() => setLimit(20)}>100</button>
        </div>

        <button
          onClick={() => logout()}
          className="p-3 px-10 rounded-3xl border dark:bg-violet-900 dark:text-violet-200 dark:border-violet-200"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        {data.map((mail, index) => (
          <MailRow key={mail.address + mail.id || index} mail={mail} />
        ))}
      </div>
    </>
  );
}
