import React, { useEffect, useState } from 'react';
import '../css/App.css';
import "../css/main.css"
import ResultTable from "./main/ResultTable";
import EnterTable from "./enter/EnterTable";
import Button from "../components/Buttons"

const App = () => {
    return (
        <div>
            <ResultTable/>
            <EnterTable/>
        </div>
    )
}

export default App;
