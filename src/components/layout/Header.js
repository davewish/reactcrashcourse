import React from 'react';
import {Link} from 'react-router-dom';
function Header(){
    return(
    <header style={headerStyle} className="header">
          <h1>To do List App</h1>
          <Link  className="header-link"  to="/">Home</Link> || <Link className="header-link"  to="/about">About</Link>

        </header>

    )
}
const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px',
    marginBottom:'15px',
}

export default Header;