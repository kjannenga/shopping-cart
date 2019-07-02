import React from 'react';



const Footer = (props) => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {props.year}</a>
        </nav>
    </div>
);


export default Footer;
