import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLogged, setLogin} from "../store/AuthSlice";
import SendLogin from "../api/Login"
import SendRegister from "../api/Register"
import User from "../components/User";
import {wait} from "@testing-library/user-event/dist/utils";

function EnterPage () {
    // const user = useSelector((state) => state.auth.value);
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const counter = useSelector((state) => state.auth.counter);
    // let logged = useSelector((state) => state.auth.logged).payload
    function tryLogin (event) {
        event.preventDefault();

        SendLogin({login: login, password: password});

        // console.log("tryLogin: ", logged);
        setLogin("");
        setPassword("");
        // dispatch(setLogged(true));
    }

    function tryRegister () {
        SendRegister({login: login, password: password});
    }

    return (
        <form >

            <label>
                Login:
                <input value={login}
                       name="login"
                       type='login'
                       onChange={e => setLogin(e.target.value)}
                /> <br/>
            </label>

            <label>
                Password:
                <input value={password}
                       name="password"
                       type='password'
                       onChange={e => setPassword(e.target.value)}
                /> <br/>
            </label>
            {counter > 0 && <div> chto-to ne tak! </div>}
            <div className="sub">
                <button onClick={tryLogin}> Enter </button>
            </div>
            <div className="sub">
                <button onClick={tryRegister}> Register </button>
            </div>
        </form>
    )
}

export default EnterPage