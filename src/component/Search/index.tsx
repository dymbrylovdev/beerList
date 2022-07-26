import React, { useRef } from 'react';
import style from "./Search.module.css";
import serchIcon from "../../assets/img/search_icon.svg";
import serchDeleteIcon from "../../assets/img/search_delete.svg";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/reducers/filter/filterSlice';
import { debounce } from 'lodash';


const Search: React.FC = () => {
    const [value, setValue] = React.useState<string>('');
    const refSearch = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();

    function handleSerchDeleteText() {
        setValue("");
        refSearch.current?.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
          dispatch(setSearchValue(str));
        }, 250),
        [],
      );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={style.wrap}>
            <div className={style.search}>
                <img src={serchIcon} alt="" className={style.icon_search} />
                <input
                    value={value}
                    ref={refSearch}
                    placeholder="find your beer..."
                    onChange={onChangeInput}
                />
                <img
                    src={serchDeleteIcon}
                    className={style.icon_search_delete}
                    onClick={() => handleSerchDeleteText()}
                />
            </div>
        </div>
    );
}

export default Search;