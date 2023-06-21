import './Digit.css';
import React, { useState, useRef, useEffect } from 'react';

const Digit = ({ start = 0, end }) => {
    const [value, setValue] = useState(null)
    const ref = useRef(start)

    const countup = end / 200;

    const count = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + countup);
            if(result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(count, 70)
    };

    useEffect(() => {
        let isMounted = true;
        if(isMounted){
            count();
        }
        return () => (isMounted = false);
    }, [end]);

    return(
        <h1 className='increment-digit'>{value}</h1>
    )
}

export default Digit; 