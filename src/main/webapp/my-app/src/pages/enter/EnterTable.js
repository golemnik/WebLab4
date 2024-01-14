import React from "react";
import Button from "../../components/Buttons"
import TextInput from "../../components/Input"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../stores/Slice'
import "../../css/main.css"


class EnterTable extends React.Component {
    constructor(props) {
        super(props);

        this.updateLogin = this.updateLogin.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.state = {
            date: "date",
            login: "",
            password: "",
            authorized: false};
    }

    componentDidMount() {
        const count = useSelector((state) => state.counter.value);
        this.setState({
            date: "count =".count
        })
    }

    updateDate () {
        const dispatch = useDispatch();
        const count1 = useSelector((state) => state.counter.value);
        dispatch(increment());
        this.setState({
            date: "count =".count1,
            authorized: false
        })
    }

    updateLogin (event) {
        this.setState({login: event.value})
    }
    updatePassword (event) {
        this.setState({password: event.value})
    }


    render() {
        if (this.state.authorized) {
            return (
                <div></div>
            );
        }
        return (
            <div>
                <TextInput value={this.state.login} act={this.updateLogin}/>
                <TextInput value={this.state.password} act={this.updatePassword}/>
                <Button bname={this.state.date.toString()} act={this.updateDate}/>
            </div>
        );
    }
}

export default EnterTable