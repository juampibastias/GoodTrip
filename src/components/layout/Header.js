import React from 'react';
import '../../styles/layout/Header.css';
const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="images/nosotros/logo.png" width="100"
                    alt="GooTrip" />
                    <h1>GoodTrip</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
