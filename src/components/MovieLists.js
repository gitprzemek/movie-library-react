// import React from 'react';
import React, { Component } from 'react';
// import Card from "./MovieListComponents/Card";
import ListApp from './MovieListComponents/ListApp';
import Navigation from "./MovieListComponents/Nav";
import Search from './MovieListComponents/Search';

class MovieLists extends Component{
    constructor(){
        super();
        this.state = {
            data : ""
        }
    }
    getUrl(url){
        this.setState({
            data: url
        })
    }
    
    render(){
        return (

            <div>
                <Navigation callback={this.getUrl.bind(this)} />
                <section className="main-container">
                    <ListApp data={this.state.data} />
                    
                </section>
                <Search/>
            </div>
        )

    }
    
}
export default MovieLists;