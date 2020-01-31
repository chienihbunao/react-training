import React from 'react';

class MenuItem extends React.Component{
    
    render(){
        return(
            <a className="menuItem" href={"/"+this.props.label}>{this.props.label}</a>
        );
    }
}

export default MenuItem;