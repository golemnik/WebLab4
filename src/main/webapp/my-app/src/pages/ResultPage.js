import React from "react";
import ResultTable from "../components/ResultTable"
import DotForm from "../components/DotForm"
import ControlledGraph from "../components/drawing/ControlledGraph";
import pullDot from "../api/PullDot";
import funcs from "../components/drawing/Draw";

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