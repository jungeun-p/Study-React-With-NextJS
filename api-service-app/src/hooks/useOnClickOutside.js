import React, { useEffect } from "react"

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            // console.log('ref', ref.current); // class가 modal인 DOM이 선택
            if(!ref.current || ref.current.contains(e.target)) return; // Modal 내부 선택시 return
            handler(); // handler 함수 실행 - modal false
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        // unmount시 삭제
        return () => {
            document.addEventListener("mousedown", listener);
        }
    }, [ref, handler])
}

export default useOnClickOutside;