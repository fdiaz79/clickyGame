import React from 'react';

const Navs = ({navData}) => {
    
    return(
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">
                <h3>Clicky Game</h3>
            </a>
            <span className = "navbar-text">
                <h3 className = {navData.classColor} >{navData.message}</h3>
            </span>
            <span className="navbar-text">
                <h3>Score : {navData.current} | Top Score: {navData.top} </h3>
            </span>

        </nav>
    )
}

export default Navs;