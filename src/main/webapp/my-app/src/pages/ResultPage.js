import React from "react";
import ResultTable from "../components/ResultTable"
import DotForm from "../components/DotForm"
import ControlledGraph from "../components/drawing/ControlledGraph";

class ResultPage extends React.Component {
    render() {
        return (
            <div>
                <DotForm/>
                <ControlledGraph/>
                <ResultTable/>
            </div>
        )
    }
}

export default ResultPage