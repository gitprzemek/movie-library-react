import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    };
    
    
    toggleClass(){
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    render(){
        return(
            <nav className="navigation">   
                <NavLink to="/" className="navigation__link navigation__link--back"><span className="fa fa-angle-left navigation__icon"></span></NavLink>
                <button id="navBtnOpen" className="navigation__link navigation__link--list" onClick={this.toggleClass}>
                <span className="fa fa-bars navigation__icon"></span><span className="navigation__title">MOVIE LISTS</span></button>
                <div id="navList" className={"navigation__list " + (this.state.active ? 'navShow': null)}>
                    <button id="navBtnClose" className={"navigation__list-btn " + (this.state.active ? 'showXBtn': null)}><span className="fa fa-times" onClick={this.toggleClass}></span></button>
                    <div className="navigation__list-cont">
                        <a href="#" className="navigation__list-item" id="popular" onClick={this.toggleClass}>Most popular</a>
                        <a href="#" className="navigation__list-item" id="nowPlaying" onClick={this.toggleClass}>Now playing</a>
                        <a href="#" className="navigation__list-item" id="topRated" onClick={this.toggleClass}>Top rated</a>
                    <a href="#" className="navigation__list-item" id="upcoming" onClick={this.toggleClass}>Upcoming</a>
                    </div>
                </div>
            </nav>
        )
    }


}


export default Navigation;