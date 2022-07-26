import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pickBy } from "lodash";
import identity from 'lodash/identity';
import { IBeer, SerchParams } from "../types";

export const getBeers = createAsyncThunk<IBeer[], SerchParams>(
    'beers/getBeersFromPage ',
    async function (params) {
        const { currentPage,  beer_name} = params;
        let data = await new Promise<IBeer[]>(resolve => setTimeout(async () => {
            let { data } = await axios.get<IBeer[]>(`https://api.punkapi.com/v2/beers?`, {
                params: pickBy(
                    {
                        page: currentPage,
                        limit: 4,
                        beer_name,
                    },
                    identity,
                ),
            });
            console.log(data);
            
            resolve(data)
        }, 1000));

        return data;

    }
)

