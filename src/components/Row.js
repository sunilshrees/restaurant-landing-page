import React from 'react';
import data from '../Data';

const Row = () => {
    return (
        <div className='explore-grid'>
            {data.map((d, i) => {
                return (
                    <div className='explore-card' key={i}>
                        <div className='card-info'>
                            <h2>{d.name}</h2>
                            <p>{d.description}</p>
                            {/* <hr /> */}
                        </div>
                        <div className='price'>${d.price}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Row;
