import PropTypes from "prop-types";
import { useState } from "react";
import MailBody from "./MailBody";

export default function MailRow({ mail }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="relative p-5 px-10 rounded-md border dark:bg-gray-800">
      {!mail.seen && (
        <div
          className="absolute w-3 h-3 rounded-[50%] top-[50%] left-4 translate-y-[-50%]"
          style={{ background: "lightgreen" }}
        ></div>
      )}
      <div className="flex flex-row justify-between">
        <b className="dark:text-white">{mail.subject}</b>
        <em>{new Date(mail.date).toLocaleDateString()}</em>
      </div>
      <div>
        <span title={mail.from.map((p) => p.long).join(", ")}>
          {mail.from.map((p) => p.short).join(", ")}
        </span>{" "}
        &rarr;{" "}
        <span title={mail.to.map((p) => p.long).join(", ")}>
          {mail.to.map((p) => p.short).join(", ")}
        </span>
      </div>

      <button
        onClick={() => setShowFull((old) => !old)}
        className="flex absolute bottom-0 left-1/2 justify-center items-center px-4 h-4 text-white bg-gray-700 rounded-t-lg -translate-x-1/2 text-[0.625rem] py-2"
      >
        {showFull ? <>&#9650;</> : <>&#9660;</>}
      </button>

      {showFull && <MailBody mail={mail} />}
    </div>
  );
}

MailRow.propTypes = {
  mail: PropTypes.object,
};
