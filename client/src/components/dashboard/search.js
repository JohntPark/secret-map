import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchForCountryOrProduct} from '../../redux/actions'
import './dashboard.css'
import ProductList from './productList';
import CountryList from './countryList';

class Search extends Component {
    state = {
        country: '',
        isShowing: true,
    }

    componentDidUpdate(prevProps) {
        if (this.props.countryName !== prevProps.countryName) {
            this.setState({
                title: this.props.countryName
            })
        }
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

    formSubmit = e => {
        e.preventDefault();
        let country = this.state.country
        country = (country.charAt(0).toUpperCase() + country.slice(1))
        this.props.searchForCountryOrProduct(country)
        this.setState({
            country: '',
            isShowing: true,
        });
    }

    render() {
        return (
            <div className="searchBar columns" style={{ flexDirection: 'column' }}>
                <div>
                    <h3 id="search">Search By Product/Country:
                    {/* <select id="drop" className="dropdown">
                            <option value="country">Country</option>
                            <option value="product">Product</option>
                        </select> */}
                    </h3>
                    <form id="search" onSubmit={this.formSubmit}>
                        <input id="countryInput" type="text" value={this.state.country} onChange={this.handleOnChange} className="input is-small" name="country" />
                        <button id="searchButton" className="button is-link is-small" type="submit ">Search</button>
                    </form>
                </div>
                {
                    this.state.isShowing && 
                    // If value == country, show
                    <ProductList />

                    // If value == product, show
                    // <CountryList />
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    
    searchForCountryOrProduct: searchTerm => dispatch(searchForCountryOrProduct(searchTerm))
});

export default connect(null, mapDispatchToProps)(Search);