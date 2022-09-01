import React from 'react';
import TableCard from "./components/cards/TableCard";
import AppLayout from './components/layouts/AppLayout';
import {Context} from "./context";

const App = () => (
    <Context>
        <AppLayout>
            <TableCard/>
        </AppLayout>
    </Context>
);

export default App;
