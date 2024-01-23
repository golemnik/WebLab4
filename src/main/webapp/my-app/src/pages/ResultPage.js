import React from "react";
import ResultTable from "../components/ResultTable"
import AddDotForm from "../components/AddDotForm"
import DelDotForm from "../components/DelDotForm"

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility () {
        this.setState(state => ({
            visible: !state.visible
        }));
    }
    render() {
        if(this.state.visible) {
            return (
                <div>
                    <AddDotForm/>
                    <DelDotForm/>
                    <ResultTable/>
                </div>
            )
        }
        return (<div/>)
    }
}

export default ResultPage