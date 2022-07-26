import React from 'react';
import iconCLose from "../../../assets/img/close.svg";
import "./Modal.scss";
import {IBeer} from "../../../redux/reducers/beer/types";

type ModalProps = {
    elem: IBeer | undefined;
    onClick: (isVisible: boolean) => void;
}

const Modal : React.FC<ModalProps> = ({elem, onClick}) => {
    return (
        <>
            <div className="modal">
                <div className="close" onClick={() => onClick(false)}>
                    <img src={iconCLose} alt=""/>
                </div>
                <div className="modal_info">
                    <div className="modal_info-left">
                        <div className="modal_info-left_image">
                            <img src={elem?.image_url} alt=""/>
                        </div>
                    </div>
                    <div className="modal_info-right">
                        <div className="modal_info-right_name">
                            {elem?.name}
                        </div>
                        <div className="modal_info-right_abv">{elem?.abv}%</div>
                        <div className="modal_info-right_tagline">{elem?.tagline}</div>

                        <p className="modal_info-right_description">
                            {elem?.description}
                        </p>
                        <div className="modal_info-right_food-pairing">
                            <div className="modal_info-right_food-pairing_title">Food pairing:</div>
                            <ul>
                                {
                                    elem?.food_pairing.map(itemElem => {
                                        return <li>{itemElem}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back_fon">
            </div>
        </>
    );
}

export default Modal;