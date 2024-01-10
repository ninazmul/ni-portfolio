
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 border border-fuchsia-500 rounded-full ${
            currentPage === page
              ? "bg-fuchsia-500 text-white"
              : "text-fuchsia-500 hover:bg-green-100"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
