import PropTypes from "prop-types";
import { useState } from "react";

export default function MailBody({ mail }) {
  const [showHtml, setHtml] = useState(false);

  const url = `http://localhost:8000/api/mails/${mail.id}/${
    showHtml ? "html" : "plain"
  }`;

  return (
    <div className="pt-5 mt-5 border-t">
      <div className="relative border-white border-opacity-50">
        <button
          onClick={() => setHtml((old) => !old)}
          className="absolute top-0 left-0 px-5 py-2 h-10 text-blue-100 rounded-br-lg dark:bg-violet-900 dark:text-violet-200 dark:border-violet-200"
        >
          {showHtml ? "Plain" : "HTML"}
        </button>

        <button
          onClick={() => window.open(url)}
          className="absolute top-0 right-0 px-5 py-2 h-10 text-blue-100 rounded-bl-lg dark:bg-violet-900 dark:text-violet-200 dark:border-violet-200"
        >
          Open
        </button>

        <iframe
          src={url}
          className="p-5 pt-8 w-full bg-white rounded border-md h-max"
        />
      </div>
    </div>
  );
}

MailBody.propTypes = {
  mail: PropTypes.object,
};
