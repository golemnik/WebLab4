import React from "react";
import ControlledInput from "../components/ControlledInput";
import ControlledButton from "../components/ControlledButton";
import {useDispatch, useSelector} from "react-redux";
import {setLogged, setLogin} from "../store/AuthSlice";

function EnterPage () {
    // const user = useSelector((state) => state.auth.value);
    const dispatch = useDispatch()

    function handleVisibility () {
        console.log("button click")

        dispatch(setLogged(true));
    }

    return (
        <form>
            <ControlledInput type='login'/> <br/>
            <ControlledInput type='password'/> <br/>
            <ControlledButton
                buttonAction={handleVisibility}
                buttonName="login"
            />
        </form>
    )
}

export default EnterPage