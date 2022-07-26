import React from 'react';
import './Content.css';
import {IBeer} from "../../types/beer";

type ContentItemBeerProps = {
    beerValues: IBeer;
    onClick: (elem: IBeer) => void;
}

const BeerItem = ({beerValues, onClick}: ContentItemBeerProps) => {

    function stringValidation (str: string) : string {
        const len = str.split(" ").join("").length;
        if (len > 140) {
            str = str.substring(0, 140) + "..."
        }
        return str
    }

    return (
            <div className="card" onClick={()=> onClick(beerValues)}>
                <div className="card__image">
                    <img src={beerValues.image_url} alt="barbarian"/>
                </div>
                <div className="card_name">
                    <div className="name">
                        {beerValues.name}
                    </div>
                </div>
                <div className="card__abv">{beerValues.abv} %</div>
                <div className="card_description">
                    {stringValidation(beerValues.description)}
                </div>
            </div>
    );
}

export default BeerItem;