import React, {ReactNode} from "react";
import {AppProvider, useAppContext} from "./AppContext";

interface Props {
    children: ReactNode;
}

const Context = ({children}: Props) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    );
}

export {Context, useAppContext};
