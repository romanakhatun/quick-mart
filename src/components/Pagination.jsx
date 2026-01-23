"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`/products?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10">
      <div className="join">
        <button
          className="join-item btn"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          «
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`join-item btn ${
              page === currentPage ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="join-item btn"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
