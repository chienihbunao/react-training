import React from 'react';
import Home from './Home.js';
import MenuItem from './MenuItem.js';
import Search from './Search.js';
import Timer from './Timer.js'
import Form from './Form.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header extends React.Component{
    render(){
        
        return (
            <Router>
                <header className="myHeader">
                    <div className="div1">
                        <div className="div2">
                            <Home siteName="MySite"/>
                            {/* <nav className="menuList">
                                <MenuItem label="Docs"/>
                                <MenuItem label="Tutorial"/>
                                <MenuItem label="Blog"/>
                                <MenuItem label="Community"/>
                            </nav> */}
                            <nav className="menuList">
                            <Link to="/" className="menuItem">Docs</Link>
                            <Link to="/tutorial" className="menuItem">Tutorial</Link>
                            <Link to="/blog" className="menuItem">Blog</Link>
                            <Link to="/community" className="menuItem">Community</Link>
                            </nav>
                            <Search/>
                        </div>
                    </div>
                </header>
                
            </Router>
        );
    }
}


export default Header;