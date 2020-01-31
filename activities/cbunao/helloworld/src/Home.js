import React from 'react';
import logo from './logo.svg';
class Home extends React.Component{
   
    render(){
        return (
            <a className="home" href="/">
                <img src={logo} alt="no display" height="20"/><span className="homeName">{this.props.siteName}</span>
            </a>
        );
    }
}

export default Home;