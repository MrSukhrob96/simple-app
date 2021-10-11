import React from "react";

const Button = (props) => {
    return (
        <button {...props} className="btn">{children}</button>
    )
}

export default Button;