import React from 'react';
import {IBeer} from "../../redux/reducers/beer/types";
import style from "./BeerItem.module.css";

type ContentItemBeerProps = {
    beerValues: IBeer;
    onClick: (elem: IBeer) => void;
}

const BeerItem: React.FC<ContentItemBeerProps> = ({beerValues, onClick}) => {

    function stringValidation (str: string) : string {
        const len = str.split(" ").join("").length;
        if (len > 140) {
            str = str.substring(0, 140) + "..."
        }
        return str
    }

    return (
            <div className={style.card} onClick={()=> onClick(beerValues)}>
                <div className={style.card__image}>
                    <img src={beerValues.image_url} alt="barbarian"/>
                </div>
                <div className={style.card_name}>
                    <div className={style.name}>
                        {beerValues.name}
                    </div>
                </div>
                <div className={style.card__abv}>{beerValues.abv} %</div>
                <div className={style.card_description}>
                    {stringValidation(beerValues.description)}
                </div>
            </div>
    );
}

export default BeerItem;