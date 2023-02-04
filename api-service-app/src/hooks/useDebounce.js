import { useState, useEffect } from "react"

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(()=>{
            setDebounceValue(value);
        }, delay)
        // 0.5초가 되기 전에, 즉 value unmount 직전 
        // cleanup 함수
        // useEffect에 대한 뒷정리 함수로, 언마운트 될 경우 호출되는 함수.
        // setInterval, setTimeout 함수 삭제
        return () => {
            clearTimeout(handler); // handler 함수를 삭제해준다
        }
    }, [value, delay]);

    return debounceValue;
}