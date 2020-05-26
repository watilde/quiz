import React, { createContext, useReducer, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import merge from "lodash.merge";
import combineReducers from "./combineReducers";
import { name, version } from "../../package.json";
import app, { appState } from "./ducks/app";
import quiz, { quizState } from "./ducks/quiz";

const rootReducer = combineReducers({
  app,
  quiz,
});

const initialState = {
  app: appState,
  quiz: quizState,
};

const persistedState = JSON.parse(localStorage.getItem(`${name}@${version}`));
const StoreContext = createContext(merge(initialState, persistedState));

export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  useEffect(() => {
    localStorage.setItem(`${name}@${version}`, JSON.stringify(state));
  }, [state]);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
