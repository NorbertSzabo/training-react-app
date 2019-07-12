import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Pizza} from './Pizza';
import {Orders} from './Orders';
import {FancyPanel} from "./FancyPanel";
import {logProps} from './LoggerHOC'


const WatchedPizzaOrders = logProps(Orders);

class PizzaMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: `Ristorante ${props.restaurantName}`,
            pizzaOffer : [],
            filterValue : '',
            orders : []
        };
        this.handleFilterValue = this.handleFilterValue.bind(this);
        this.onPizzaBuyHandler = this.onPizzaBuyHandler.bind(this);
        //console.log('Constructor');
    }

    componentDidMount() {
        //console.log('Did Mount');

        fetch('http://www.mocky.io/v2/5d25c96c2f0000175bc10aa9?mocky-delay=1000ms')
            .then( response => response.json())
            .then( data => this.setState({pizzaOffer: data}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log('Did Update');
    }

    componentWillUnmount() {
        //console.log('Will Unmount');
    }

    handleFilterValue(event) {
        this.setState({
            filterValue : event.target.value
        });
    }

    onPizzaBuyHandler(name, price) {
        let existingOrders = this.state.orders;
        existingOrders.push({name, price});
        this.setState({
            orders: existingOrders
        })
    }


    render() {
        //console.log('Render');

        if (this.state.pizzaOffer.length) {
            return (
                <Fragment>

                    <div  style={{float:'right'}} >
                        <FancyPanel title={'Shopping cart'}>
                            <WatchedPizzaOrders orders={this.state.orders}/>
                        </FancyPanel>
                    </div>


                    <div  style={{float:'left'}} >
                        <h1>{`Welcome to ${this.state.companyName}`}</h1>
                        <h2>{`We have ${this.state.pizzaOffer.length} pizza in the menu`}</h2>

                        <p>Find your pizza: </p>
                        <input
                            type={'text'}
                            value={this.state.filterValue}
                            onChange={this.handleFilterValue}
                        />

                        <br/><br/>

                        {
                            this.state.pizzaOffer.map((item, index) => {
                                if (this.state.filterValue) {
                                    return (item.name.includes(this.state.filterValue)
                                                ?
                                                <Pizza
                                                    name={item.name}
                                                    price={item.price}
                                                    topping={item.topping}
                                                    key={index}
                                                    onPizzaBuy={this.onPizzaBuyHandler}
                                                />
                                                :
                                                null )
                                } else {
                                    return (
                                        <Pizza
                                            name={item.name}
                                            price={item.price}
                                            topping={item.topping}
                                            key={index}
                                            onPizzaBuy={this.onPizzaBuyHandler}
                                        />
                                    )
                                }
                            })
                        }
                    </div>

                </Fragment>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

PizzaMenu.defaultProps = {
    restaurantName: 'Best in Town'
};

PizzaMenu.propTypes = {
    restaurantName: PropTypes.string
};

export default PizzaMenu;
