import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center items-center gap-4 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-gray-700 hover:text-black transition disabled:opacity-50 cursor-pointer"
                aria-label="Previous Page"
            >
                &lt; Previous
            </button>

            <button 
                className="px-3 py-1 bg-gray-200 rounded-md text-black font-medium"
                disabled
            >
                {currentPage}
            </button>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-gray-700 hover:text-black transition disabled:opacity-50 cursor-pointer"
                aria-label="Next Page"
            >
                Next &gt;
            </button>
        </div>
    );
};

export default Pagination;
