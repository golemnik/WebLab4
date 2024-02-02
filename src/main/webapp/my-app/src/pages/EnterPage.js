import React, {useState} from "react";
import {useSelector} from "react-redux";
import SendLogin from "../api/Login"
import SendRegister from "../api/Register"
import sha256 from 'crypto-js/sha256';

function EnterPage () {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const counter = useSelector((state) => state.auth.counter);
    function tryLogin (event) {
        event.preventDefault();
        SendLogin({login: login, password: sha256(password).toString()});

        setLogin("");
        setPassword("");
    }

    function tryRegister (event) {
        event.preventDefault();


        SendRegister({login: login, password: sha256(password).toString()});
        setLogin("");
        setPassword("");
    }

    return (
        <div className="enterPage">
            <form>

                <div className="login">
                    <p> Login: </p>
                    <input value={login}
                           name="login"
                           type='login'
                           onChange={e => setLogin(e.target.value)}
                    /> <br/>
                </div>

                <div className="password">
                    <p>Password:</p>

                    <input value={password}
                           name="password"
                           type='password'
                           onChange={e => setPassword(e.target.value)}
                    /> <br/>
                </div>

                {counter > 0 && <div> Login or password are incorrect</div>}
                <div className="sub">
                    <button onClick={tryLogin}> Enter </button>
                </div>
                <div className="sub">
                    <button onClick={tryRegister}> Register </button>
                </div>
            </form>
        </div>

    )
}

export default EnterPage