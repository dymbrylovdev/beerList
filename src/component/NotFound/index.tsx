import React from 'react';
import style from "./NotFound.module.css";

const NotFoundBlock: React.FC = () => {
    return (
        <div className={style.root}>
            <h1>
                Ничего не найдено!!!
            </h1>
            <p className={style.description}>
                К сожалени данная страница отсутствует в нашем интернет-магазине
            </p>
        </div>
    );
}

export default NotFoundBlock;