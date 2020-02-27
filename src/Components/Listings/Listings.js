import React from 'react';
import './Listings.css';

export default class Listings extends React.Component {
    render() {
        return (
            <section className='Listings'>
                <section className='search-area'>
                    <input type='text' name='search' />
                </section>
                <section className='search-by-area'>
                    <div>390 results found</div>
                    <select className='sort-option'>
                        <option value='price-asc'>Lowest price</option>
                        <option value='price-dec'>Highest price</option>
                    </select>
                    <div>
                        {/*Icons will be here */}
                    </div>
                </section>
                <section className='listing-result'>
                    <div className='listing-card'>
                        <div className='listing-img'>
                            <span>Address</span>
                            <div className='user-img'></div>
                        </div>
                        <div className='listing-info'>
                            <span>230,000 sek</span>
                            <span>Location: Malmö</span>
                        </div>
                    </div>
                </section>
                <section className='pagination'>
                    <ul>
                        <li>prev</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>next</li>
                    </ul>
                </section>
            </section>
        );
    }
}