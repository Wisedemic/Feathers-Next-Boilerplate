import React, { useState } from 'react';

function Header() {
    const [isMenuToggled, setMenu] = useState(false);
    const disableMenu = () => setMenu(false);
    const enableMenu = () => setMenu(true);

    const isActive = isMenuToggled ? ' is-active' : '';

    return (
        <nav className="navbar" id="mainNav" role="navigation" aria-label="main navigation" onBlur={disableMenu}>
            <div className="navbar-brand">
                <div className="navbar-item" onClick={disableMenu}>
                    <h1 className="title is-6">
                        Feathers / Next Boilerplate
                    </h1>
                </div>
                <a role="button" className={`navbar-burger${isActive}`} onClick={isMenuToggled ? disableMenu : enableMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div className={`navbar-menu${isActive}`}>
                <div className="navbar-start">

                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-success" onClick={disableMenu}>
                                Link 1
                        </button>
                            <button className="button is-info" onClick={disableMenu}>
                                Link 2
                        </button>
                            <button className="button is-dark" onClick={disableMenu}>
                                Link 3
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Header;