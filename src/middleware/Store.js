import React, {useReducer} from 'react';
import {initialState, reducer} from "./reducers/FilterReducer";

export const FilterStore = React.createContext({});

function Store({children}) {
    let [movieState, movieDispatch] = useReducer(reducer, initialState);
    return (
        <FilterStore.Provider value={[movieState, movieDispatch]}>
            {children}
        </FilterStore.Provider>
    );
}

export default Store;
