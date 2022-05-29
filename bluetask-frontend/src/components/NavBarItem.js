import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class NavBarItem extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link className = "nav-item nav-link" to = {this.props.item.href} 
                    onClick= {e => this.props.onClick(this.props.item)}> 
                    {this.props.item.name} </Link> 
                </div>
            </BrowserRouter>
        );
    }
}

export default NavBarItem;