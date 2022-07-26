import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/reducers/filter/filterSlice';
import { AppDispatch } from '../../redux/store';
import style from './Pagination.module.scss'

interface PaginationProps {
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({currentPage}) => {
    const dispatch = useDispatch<AppDispatch>(); 

    function handleClickPagination(num: number) {
        if (num < 1) {
            num = 1;
        } else if (num > 3) {
            num = 1;
        } 
        dispatch(setCurrentPage(num));
    }

    return (
        <footer>
            <ul className={style.wrap}>
                <li onClick={() => handleClickPagination(--currentPage)}> <span>{"<"}</span> </li>
                {[...new Array(3)].map((item, index) => {
                    ++index
                    return <li
                        className={currentPage === index ? `${style.activ}` : ""}
                        key={index}
                        onClick={() => handleClickPagination(index)}
                    >
                        <span>{index}</span>
                    </li>;
                })}
                <li onClick={() => handleClickPagination(++currentPage)}> <span>{">"}</span>  </li>
            </ul>
        </footer>
    )
}

export default Pagination;