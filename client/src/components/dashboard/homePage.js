import React, { Component } from 'react';
import WorldMap from './worldmap';
import Search from './search';
import Footer from '../footer/footer'
import './dashboard.css';

class HomePage extends Component {
    state = {
        countryName: '',
        showListing: false
    }

    updateCountryName = countryName => {
        this.setState({
            countryName,
            showListing: true
        });
    }

    render() {
        return (
            <div>
                <WorldMap updateCountryName={this.updateCountryName} />
                <Search
                    countryName={this.state.countryName}
                    showListing={this.state.showListing}
                />
                <Footer/>
            </div>
        )
    }
}

export default HomePage;