import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../services/castom-hooks/useInput";

const LoginForm = () => {

    const username = useInput();
    const password = useInput();
    const loginFormRef = useRef();

    const signInHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 col-sm-10 col-12">
                <form className="p-5 shadow" ref={loginFormRef} onSubmit={signInHandler}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="text-muted pb-2">Username or Email</label>
                        <input type="text" {...username} className="form-control" id="formGroupExampleInput" placeholder="email" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="formGroupExampleInput2" className="text-muted pb-2">Password</label>
                        <input type="password" {...password} className="form-control" id="formGroupExampleInput2" placeholder="*********" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Sign In</button>
                        <p className="text-muted pt-2 text-lowercase font-italic" style={{ textAlign: "right" }}>
                            If you haven't account ? <Link to="/register" className="text-primary" style={{ textDecoration: 'none' }}>register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;