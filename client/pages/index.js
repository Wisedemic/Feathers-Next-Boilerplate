import React from 'react';
import Link from 'next/link';

export default () => (
    <section className="hero is-fullheight is-info is-bold">
        <div className="hero-body">
            <div className="container">
                <Link href="/about">
                    <button className="button is-warning">
                        About Page
                    </button>
                </Link>
            </div>
        </div>
    </section>
);