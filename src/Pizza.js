import React from 'react';
import pizzaImg from './pizza.svg';

function PizzaName(props) {
    return <h3>{` Pizza ${props.name} `}</h3>
}

function PizzaPrice(props) {
    return <h3>{'Price: ' + props.price}</h3>
}

export function Pizza(props) {

    const {name, price, topping} = props;
    const pizzaHeaderStyle = {'backgroundColor':'yellow'};
    const pizzaBodyStyle = {'backgroundColor':'#FFFAF0'};
    const pizzaPriceStyle = {'backgroundColor':'coral'};

    return (
        <table style={{'textAlign':'center'}}>
            <thead style={pizzaHeaderStyle}>
                <tr>
                    <td> <PizzaName name={name}/> </td>
                </tr>
            </thead>
            <tbody style={pizzaBodyStyle}>
                <tr>
                    <td>
                        <img
                            src={pizzaImg}
                            style={{
                                'maxWidth':'200px',
                                'maxHeight':'200px'
                            }}
                            onClick={(e) => {
                                alert(`Toppings are: ${topping}`);
                            }}
                            alt={name}
                        />
                    </td>
                </tr>
                <tr style={pizzaPriceStyle}>
                    <td>
                        <PizzaPrice price={price}/>
                        <button onClick={(e) => {
                            props.onPizzaBuy(name, price);
                        }}>
                            Buy
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    )
}
