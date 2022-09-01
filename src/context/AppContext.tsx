import {createContext, ReactNode, Reducer, useContext, useReducer} from "react";
import {AppAction, AppState} from "./types";
import {reduceAppContext} from "./reducers";
import {INITIAL_APP_STATE} from "./constants";

interface AppContextReducer {
    state: AppState;
    dispatch: (action: AppAction) => void;
}

const AppContext = createContext<AppContextReducer | null>(null);


const AppProvider = ({children}: { children: ReactNode }): JSX.Element => {
    const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reduceAppContext, INITIAL_APP_STATE);
    const value = {state, dispatch};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

function useAppContext(): AppContextReducer {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error("useAppContext() must be used within a AppProvider.");
    }
    return context;
}

export {AppProvider, useAppContext};
