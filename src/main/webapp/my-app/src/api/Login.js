import {setLogged} from "../store/AuthSlice";
import store from "../store/Store"

function Login(user) {
    // const dispatch = useDispatch();
    fetch('api/login',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(user)
        })
        .then(response =>response.json())
        .then(response => {
            console.log("response: ", response);
            store.dispatch(setLogged(response));
        })
}

export default Login