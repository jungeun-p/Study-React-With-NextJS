import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 50 ? true : false);
        })
        // 컴포넌트를 사용하지 않을 때 함수를 더이상 호출하지 않도록 이벤트 리스너를 삭제
        return () => {
            window.removeEventListener("scroll", () => {})
        }
    }, []);

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <div className="nav__container">
                <img 
                    className="nav__logo"
                    alt="Netflix logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                    onClick={()=> window.location.reload()}
                />
                <img 
                    className="nav__avatar"
                    alt="User logged"
                    src="https://occ-0-325-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABW_sz_3iJW5z9auXkRdXdfwb9gwT7lxwXHTq0-t2G7iDI74MTAiW4EUoY7DIvihyrdCQpG6rpSmYXQw5qmgQ1avCOkKPQrM.png?r=079"
                />
            </div>
        </nav>
    );
};

export default Nav;