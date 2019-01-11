import React, { Component } from 'react';
import Card from "./Card";
import Pagination from './Pagination';

class ListApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
        this.getPageNumber = this.getPageNumber.bind(this)
        // this.fetchApi = this.fetchApi.bind(this);
    }
    // myUrls(){
    //     let xxx = this.props.data;
    //     return xxx;
    // }
    // fetchApi(){
        
    //     if (this.props.data === ""){
    //         return "https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=1";
    //     }else{
    //         return this.props.data
    //     }
        
            
    // }
    
    componentDidMount = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=1")
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                isLoaded: true,
                items: resp.results
            })
            // console.log(this.state.items)
            // console.log(this.props.data)
                 
        })  
    }
    componentDidUpdate(prevProps, nextState){
        if (this.props.data !== prevProps.data) {
            fetch(this.props.data)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    isLoaded: true,
                    items: resp.results
                })
                console.log("FETCH UPDATE "+this.props.data)        
            })
            
            }
        
    }
    getPageNumber(page){
        console.log(page);
    }
    // render(){
    //  return(<Child sendData={this.getData}/>);
    // }
    render() {
        var {isLoaded, items} = this.state;
        console.log("RENDER "+this.props.data)
        return (
            <div>
                <div className="movie-section" id="movie-section">
                
                    {items.map( (item) => ( <Card key={item.id} item={item} /> ) )};
                </div>
                <Pagination/>
            </div>
            
        );
    }
}

export default ListApp;