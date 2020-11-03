//Setup Data Layer
//need this to track basket

import React, { createContext, useContext, useReducer } from "react";


//this is data layer
export const StateContext = createContext();

//build provider, wrap entire app in this 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//use this inside component
export const useStateValue = () => useContext(StateContext);