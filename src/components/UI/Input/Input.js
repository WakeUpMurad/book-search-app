import React, {useRef} from 'react';
import cl from "./Input.module.css"
const Input = ({type, placeholder}) => {

    const inputRef = useRef(null);

    const handleChange = () => {
        const inputValue = inputRef.current.value;
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            ref={inputRef}
            onChange={handleChange}
        />
    );
};
export default Input;