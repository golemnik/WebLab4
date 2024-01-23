import React from 'react';
import "../css/main.css"
import EnterPage from "./EnterPage"
import ResultPage from "./ResultPage";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }


    render() {
        return (
            <div>
                <EnterPage
                    visible={!this.state.visible}
                />
                <ResultPage
                    visible={this.state.visible}
                />
            </div>
        )
    }
}

export default App;
