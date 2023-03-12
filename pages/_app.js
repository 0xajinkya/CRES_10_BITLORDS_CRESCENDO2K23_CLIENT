import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

const progress = new ProgressBar({
    size: 2,
    color: '#4197d7',
    className: 'z-50',
    delay: 100
});


Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {


    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    if (!hydrated) {
        return null;
    }


    return <Component {...pageProps}
    />



}