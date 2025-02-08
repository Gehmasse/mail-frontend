import PropTypes from "prop-types";

export default function PageControls({ pagination }) {
  return (
    <div className="flex flex-row gap-5 p-3 my-5 rounded-3xl border dark:bg-violet-900 dark:text-violet-300 dark:border-violet-300">
      <button
        onClick={pagination.prevPage}
        disabled={!pagination.prevPage}
        className="scale-x-[-1] disabled:opacity-40"
      >
        &#10148;
      </button>
      <span>
        {pagination.currentPage} / {pagination.totalPages}
      </span>
      <button onClick={pagination.nextPage} disabled={!pagination.nextPage}>
        &#10148;
      </button>
    </div>
  );
}

PageControls.propTypes = {
  pagination: PropTypes.object,
};
