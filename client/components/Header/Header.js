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
                    <div id="logo" style={{ lineHeight: '1rem' }}>
                        <div className="title is-6" style={{ marginBottom: '0px' }}>
                            Tristan Navarrete
                            <br />
                            <p className="subtitle is-6">Web & Blockchain Developer</p>
                        </div>
                    </div>
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
                            <button className="button is-success has-icon" onClick={disableMenu}>
                                <span>Medium</span>
                                <span className="icon"><i className="fab fa-medium"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Header;