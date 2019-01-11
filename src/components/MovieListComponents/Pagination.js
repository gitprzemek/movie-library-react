import React, { Component } from 'react'

class Pagination extends Component {

    pageNumber(page = 1){
        this.props.sendData(page + 1);
      }
        render(){
            return(
                <section className="btns-container" id="btns-container">
                    <button className="btns-container__btn btns-container__btn--left" id="prevBtn" onClick = {this.pageNumber}><span className="fa fa-caret-left"></span></button>
                    <button className="btns-container__btn btns-container__btn--right" id="nextBtn"><span className="fa fa-caret-right"></span></button>
                </section>
                )
        }
}


    


export default Pagination;