import React from 'react';
import App, { Container } from 'next/app';

import { PageTransition } from 'next-page-transitions';

import InternetStatusNotif from '../components/InternetStatusNotif/';
import Loader from '../components/Loader/';
import Header from '../components/Header/';
import Footer from '../components/Footer/';

import Styled from 'styled-components';

const StyleWrapper = Styled.div`
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;

const TIMEOUT = 150;

class AppWrapper extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <style jsx global>{`
                        .page-transition-enter {
                            opacity: 0;
                            transform: translate3d(0, 20px, 0);
                        }
                        .page-transition-enter-active {
                            opacity: 1;
                            transform: translate3d(0, 0, 0);
                            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
                        }
                        .page-transition-exit {
                            opacity: 1;
                        }
                        .page-transition-exit-active {
                            opacity: 0;
                            transition: opacity ${TIMEOUT}ms;
                        }
                        .loading-indicator-appear,
                        .loading-indicator-enter {
                            opacity: 0;
                        }
                        .loading-indicator-appear-active,
                        .loading-indicator-enter-active {
                            opacity: 1;
                            transition: opacity ${TIMEOUT}ms;
                        }
                        `}
                </style>
                <PageTransition
                    timeout={TIMEOUT}
                    classNames='page-transition'
                    loadingComponent={<Loader />}
                    loadingDelay={300}
                    loadingTimeout={{
                        enter: TIMEOUT,
                        exit: 0
                    }}
                    loadingClassNames='loading-indicator'
                >
                    <React.Fragment>
                        <InternetStatusNotif />
                        <Header />
                        <StyleWrapper>
                            <Component {...pageProps} />
                        </StyleWrapper>
                        <Footer />
                    </React.Fragment>
                </PageTransition>
            </Container>
        )
    }
}

export default AppWrapper;