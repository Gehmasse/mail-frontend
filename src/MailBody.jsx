import PropTypes from "prop-types";

export default function MailBody({ mail }) {
  const url = `http://localhost:8000/?page=body&id=${mail.id}`;

  return (
    <div className="pt-5 mt-5 border-t">
      <div className="relative border-white border-opacity-50">
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
