import {setLogged} from "../store/AuthSlice";

function Login (user) {
    fetch('api/register',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(user)
        })
        .then(response => response.json())
}

export default Login