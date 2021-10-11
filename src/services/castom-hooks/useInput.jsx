import { useState } from "react";

function useInput(initialvalue = '') {

    const [value, setvalue] = useState(initialvalue);

    const onChange = (e) => {
        setvalue(prev => prev = e.target.value)
    }

    return {
        value,
        onChange,
    }

}

export default useInput;