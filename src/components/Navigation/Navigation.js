import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {  
    if(isSignedIn) {
        return(
            <nav className="nav-main">
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sing Out</p>
            </nav>
        );

    } else {
        return (
            <nav className="nav-main">
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sing In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;