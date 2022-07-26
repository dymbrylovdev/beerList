import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo-beer.png";
import { setCurrentPage } from '../../redux/reducers/filter/filterSlice';
import Search from '../Search';
import style from "./Header.module.css";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <header className={style.wrap}>
            <div className={style.logo}>
                <Link to={'/'}>
                    <img src={logo} alt="" onClick={()=> dispatch(setCurrentPage(1))}/>
                </Link>
            </div>
            <div className={style.search}>
                <Search />
            </div>
        </header>
    );
}

export default Header;