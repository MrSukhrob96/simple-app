import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <div className="row justify-content-center text-uppercase">
            <div className="col-lg-5 col-md-7 col-sm-10 col-12">
                <form className="p-5 shadow">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="text-muted pb-2">Username or Email</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="alex@gmail.com" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="formGroupExampleInput2" className="text-muted pb-2">Password</label>
                        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="*********" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="formGroupExampleInput2" className="text-muted pb-2">Password Confirm</label>
                        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="*********" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Sign Up</button>
                        <p className="text-muted pt-2 text-lowercase font-italic" style={{ textAlign: "right" }}>
                            If you have account ? <Link to="/login" className="text-primary" style={{ textDecoration: 'none' }}>login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;