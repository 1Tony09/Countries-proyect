import React from 'react'
import style from './Pagination.module.css'

export default function Pagination({
    totalPages, paginate, currentPage, setCurrentPage,
}) {
    const maxNumbers = 3;
    let pages = [];

    for(let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let pageNumbers = () => {
        const half = Math.round(maxNumbers / 2);
        let to = maxNumbers;
        if(currentPage + half >= totalPages) {
            to = totalPages;
        } else if (currentPage > half) {
            to = currentPage + half;
        }

        let from = to - maxNumbers;
        if(from < 0) {
            from = 0;
        }

        return pages.slice(from, to);
    };

    return (
        <div className={style.paginationContainer}>
            {currentPage > 1 && (
                <a href='#' onClick={() => paginate(-1)}>
                    <li className={style.prev}>Prev</li>
                </a>
            )}
            {pageNumbers().map((number) => (
                <a key={number} href='#' onClick={() => setCurrentPage(number)}>
                    <li className={style.number}>
                        {number}
                    </li>
                </a>
            ))}
            {currentPage !== totalPages && (
                <a href='#' onClick={() => paginate(1)}>
                    <li className={style.next}>Next</li>
                </a>
            )}
        </div>
    )
}