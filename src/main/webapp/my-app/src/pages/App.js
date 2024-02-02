import React from 'react';
import "../css/main.css"
import EnterPage from "./EnterPage"
import ResultPage from "./ResultPage";
import {useSelector} from "react-redux";


function App () {
    let authorized = useSelector((state) => state.auth.logged).payload;

    if (authorized) {
        return (
            <div>
                <ResultPage />
            </div>
        )
    }
    else {
        return (
            <div>
                <EnterPage />
            </div>
        )
    }

}


export default App;
