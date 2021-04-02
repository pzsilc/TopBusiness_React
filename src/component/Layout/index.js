import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import HamburgerMenu from 'react-hamburger-menu';
import './style.scss';



const pClick = e => {
    const { sec } = e.target.dataset;
    let section = $(`section[data-section="${sec}"]`);
    $([document.documentElement, document.body]).animate({
        scrollTop: section.offset().top
    }, 1000);
}



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggler, setToggler] = useState(React.createRef());
    const [start, setStart] = useState(true);
    const header = useRef();
    const switchIsOpen = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        if(start){ setStart(false); return; }
        toggler.current.click();
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const topOffsetLimit = 200;
            let y = window.pageYOffset;
            if(y < topOffsetLimit){
                let diff = topOffsetLimit - y;
                header.current.style.top = diff + 'px';
            } else {
                header.current.style.top = '0px';
            }
        });
    }, []);

    return(
        <header ref={header} style={{top: '200px'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mt-2 mx-auto ml-lg-5 mr-lg-5 pl-lg-5" href="#"><h1>Biznes</h1></a>
                <button className="navbar-toggler" hidden ref={toggler} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={switchIsOpen}
                    width={30}
                    height={22}
                    strokeWidth={1}
                    rotate={0}
                    color='#4dc2f8'
                    borderRadius={0}
                    animationDuration={0.5}
                    className="d-lg-none mr-5"
                />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <p className="nav-link ml-5" data-sec="1" onClick={pClick}>WSTĘP</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link ml-5" data-sec="2" onClick={pClick}>O NAS</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link ml-5" data-sec="3" onClick={pClick}>KONTAKT</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link ml-5" data-sec="4" onClick={pClick}>SEKCJA</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}



const Footer = () => {
    return(
        <footer className='text-light'>
            <div className='container my-5 px-5 pt-5 pb-1'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className="list-group footer-section-list">
                            <p className="list-group-item list-group-item-action p-1" data-sec="1" onClick={pClick}>WSTĘP</p>
                            <p className="list-group-item list-group-item-action p-1" data-sec="2" onClick={pClick}>O NAS</p>
                            <p className="list-group-item list-group-item-action p-1" data-sec="3" onClick={pClick}>KONTAKT</p>
                            <p className="list-group-item list-group-item-action p-1" data-sec="4" onClick={pClick}>SEKCJA</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 socials'>
                        <a href="#"><i className="fa fa-facebook-square"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <br/>
                        <a href="#"><i className="fa fa-google-plus-square"></i></a>
                        <a href="#"><i className="fa fa-twitter-square"></i></a>
                    </div>
                </div>
            </div>
            <div className='text-center px-5 pt-3 pb-1' id='copy'>
                <h5 className="mb-4"><i className="fa fa-envelope mr-3"/>contact@biznes.pl</h5>
                <p>&copy; copyright 2021 | Wszelkie prawa zastrzeżone</p>
            </div>
        </footer>
    );
}



const Loader = () => {
    const loader = useRef();
    useEffect(() => window.onload = () => $(loader.current).fadeOut())
    return(
        <div id='loader' ref={loader}>
            <i className="fa fa-circle shift-animation-1" style={{ fontSize:'40px' }}></i>
            <i className="fa fa-circle shift-animation-2" style={{ fontSize:'40px' }}></i>
        </div>
    )
}




export {
    Header,
    Footer,
    Loader
}