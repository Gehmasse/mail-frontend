import Loading from "./Loading";
import MailRow from "./MailRow";
import PageControls from "./PageControls";
import { usePaginate } from "./usePaginate";

export default function Mails() {
  const { data, loading, error, pagination } = usePaginate("mails");

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <PageControls pagination={pagination} />

      <div className="flex flex-col gap-5 w-1/2">
        {data.map((mail) => (
          <MailRow key={mail.id} mail={mail} />
        ))}
      </div>

      <PageControls pagination={pagination} />
    </>
  );
}
