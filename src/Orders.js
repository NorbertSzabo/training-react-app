import React from 'react';
import PropTypes from 'prop-types';

export function Orders(props) {
    return (
        <div>
            {
                props.orders.map( (item, index) => (
                    <h2 key={index}>{`${item.name} - ${item.price}`}</h2>
                ))
            }
        </div>
    )
}


Orders.propTypes = {
    orders: PropTypes.array
};

Orders.defaultProps = {
    orders : [{name:'empty tray', price: ''}]
}
