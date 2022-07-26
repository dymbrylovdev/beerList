import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { IBeer, Status } from "../redux/reducers/beer/types";
import { getBeers } from "../redux/reducers/beer/AsyncActions/actionBeer";
import BeerItem from "../component/Beer/index";
import Modal from "../component/Modal/index";
import Pagination from '../component/Pagination/index';
import SceletonLoader from '../component/SelectorLoader/index';

const Home: React.FC = () => {
    const beers = useSelector((state: RootState) => state.beerReducer.beers);
    const status = useSelector((state: RootState) => state.beerReducer.status);
    const loading = useSelector((state: RootState) => state.beerReducer.loading);
    const {currentPage,searchValue} = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useDispatch<AppDispatch>();
    const [modalElem, setModalElem] = useState<IBeer | undefined>();
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    function addElemInModal(elem: IBeer): void {
        setModalIsVisible(true);
        setModalElem(elem);
    }

    const getBeersParams = () => {

    }

    useEffect(() => {
        console.log("getBeers");
        
        dispatch(getBeers({
            currentPage: String(currentPage),
            beer_name: searchValue
        }));
        window.scrollTo(0, 0);          
    }, [currentPage,searchValue])

    let beersItems = beers.map(beerValues => <BeerItem key={beerValues.id} beerValues={beerValues} onClick={addElemInModal} />);
    let loader = [...new Array(9)].map((item, index)=> <SceletonLoader key={index}/>);

    return (
        <>
            <main>
                <div className="wrap">
                    {status === Status.ERROR ? (
                        <p>К сожалению, не удалось получить список пив. Попробуйте повторить попытку позже.</p>
                    ) : ( loading ? loader : beersItems)}
                </div>
            </main>
            <Pagination currentPage={currentPage}/>
            {
                modalIsVisible
                    ? <Modal elem={modalElem} setModalIsVisible={setModalIsVisible} />
                    : null
            }
        </>
    )
};

export default Home;