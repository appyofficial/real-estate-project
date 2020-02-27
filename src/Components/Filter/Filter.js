import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {
    render() {
        return (
            <section className='Filter'>
                <h4>Filter</h4>
                <select name='Neighbourhood' className='filters'>
                    <option>Malmö Hyllie</option>
                </select>
                <select name='Neighbourhood' className='filters'>
                    <option>Malmö Hyllie</option>
                </select>
                <select name='Neighbourhood' className='filters'>
                    <option>Malmö Hyllie</option>
                </select>
                <div className='filters price'>
                    <span className='title'>Price</span>
                    <input type='text' name='min-price' className='min-price' />
                    <input type='text' name='max-price' className='max-price' />
                </div>
                <div className='filters floor-space'>
                    <span className='title'>Price</span>
                    <input type='text' name='min-floor-space' className='min-floor-space' />
                    <input type='text' name='max-floor-space' className='max-floor-space' />
                </div>
                <div className='filters extras'>
                    <label htmlFor='extras'>
                        <span>Elevator</span>
                        <input type='checkbox' name='extras' value='elevator' />
                    </label>
                    <label htmlFor='extras'>
                        <span>Swimming Pool</span>
                        <input type='checkbox' name='extras' value='swimming-pool' />
                    </label>
                    <label htmlFor='extras'>
                        <span>Gym</span>
                        <input type='checkbox' name='extras' value='gym' />
                    </label>
                </div>
            </section>
        );
    }
}