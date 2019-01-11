import React, { PureComponent } from 'react'

const Search = () => {


    return (
        <section className="search-section">
                <form role="search" className="search-form">
                    <input type="text" size="10" className="search-form__input" id="search-form__input" placeholder="Search..." />
                    <button type="button" className="search-form__btn" id="search-form__btn"><span className="fa fa-search search-form__icon"></span></button>
                </form>
            </section>
    )
}

export default Search;