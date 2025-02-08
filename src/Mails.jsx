import PageControls from "./PageControls";
import { usePaginate } from "./usePaginate";

export default function Mails() {
  const { data, loading, error, pagination } = usePaginate("mails");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col justify-center items-center p-7 shadow-lg dark:bg-gray-900 dark:text-gray-400">
      <PageControls pagination={pagination} />

      <div className="flex flex-col gap-5 w-1/2">
        {data.map((item) => (
          <div key={item.id} className="p-5 rounded-md border dark:bg-gray-800">
            <div className="flex flex-row justify-between">
              <b className="dark:text-white">{item.subject}</b>
              <em>{new Date(item.date).toLocaleDateString()}</em>
            </div>
            <div></div>
            <div>
              <span title={item.from_long}>{item.from}</span> &rarr;{" "}
              <span title={item.to_long}>{item.to}</span>
            </div>
          </div>
        ))}
      </div>

      <PageControls pagination={pagination} />
    </div>
  );
}
