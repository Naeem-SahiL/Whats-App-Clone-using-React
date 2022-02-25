import React, { createContext, useReducer ,useContext} from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialSatate, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialSatate)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);