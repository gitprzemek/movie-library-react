import React, { Component } from 'react';
import Card from "./Card";

class ListApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=1")
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                isLoaded: true,
                items: resp.results
            })
            console.log(this.state.items)
            // let movieApi = resp;
            // let movieResult = resp.results;
            // let maxLength = resp.total_pages;       
    })
    
    
};


    render() {
        var {isLoaded, items} = this.state;
        
        return (
            <div className="movie-section" id="movie-section">
                {items.map( (item) => ( <Card key={item.id} item={item} /> ) )};
            </div>
            
        );
    }
}

export default ListApp;