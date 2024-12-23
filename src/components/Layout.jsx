import React from 'react';
import noiseBgNew from '../assets/noise-bg-new.png';

const Layout = ({ children }) => {
    return (
        <div style={{ backgroundImage: `url(${noiseBgNew})` }} className="bg-cover opacity-98 bg-center">
            <div className="flex h-screen font-outfit">
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;