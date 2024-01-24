import React from 'react';
import "../css/main.css"
import EnterPage from "./EnterPage"
import ResultPage from "./ResultPage";
import {useDispatch, useSelector} from "react-redux";


function App () {
    let authorized = useSelector((state) => state.auth.logged).payload;
    // const authorized = false;
    console.log("authorized: ", authorized);

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
