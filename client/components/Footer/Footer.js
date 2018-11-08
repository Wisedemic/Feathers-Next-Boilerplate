import React from 'react';

export default () => (
    <section className="hero is-light is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <p className="content">
                    Made by Tristan Navarrete &copy; {(new Date()).getFullYear()}
                </p>
            </div>
        </div>
    </section>
);