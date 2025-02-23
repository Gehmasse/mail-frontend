import Loading from "./Loading";
import MailRow from "./MailRow";

import { useFetch } from "./useFetch";

export default function Mails() {
  const { data, loading, error } = useFetch("mails");

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        {data.map((mail) => (
          <MailRow key={mail.id} mail={mail} />
        ))}
      </div>
  );
}
