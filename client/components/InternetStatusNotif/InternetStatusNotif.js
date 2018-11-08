import React, { useState, useEffect } from 'react';
import Toast from '../Toast/';

function InternetStatusNotif() {
    const [status, setStatus] = useState(true);
    function checkStatus() {
        if (window.navigator.onLine) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }

    useEffect(() => {
        // When the browser connects to the internet
        window.addEventListener('online', checkStatus);
        // When the browser disconnects from the internet
        window.addEventListener('offline', checkStatus);
        return () => {
            window.removeEventListener('offline', checkStatus);
            window.removeEventListener('online', checkStatus);
        }
    }, [status]);

    return !status ? (
        <Toast>
            <p className="control">No Internet Connection Detected...</p>
            {/* <img src={require('images/loader.gif')} alt="Loading..." />  */}
        </Toast>
    ) : null;
}

export default InternetStatusNotif;