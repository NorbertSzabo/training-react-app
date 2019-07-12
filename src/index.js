import React from 'react';
import ReactDOM from 'react-dom';
import PizzaMenu from './PizzaMenu';


//const element1 = <h1>Hello, this is a simple JSX element</h1>;

//const element2 = React.createElement('h1', null, 'Hello, this is a JS element')

/*function MyYellowButton(props){
    return <button style={{'backgroundColor':'yellow'}}> {props.text} </button>
}*/

/*class MyRedButton extends React.Component {
    render() {
        return <button style={{'backgroundColor':'red'}}>  {this.props.text} </button>
    }
}*/

ReactDOM.render(
    <div>
        <PizzaMenu restaurantName={'Don Peppe'}/>
    </div>
    , document.getElementById('root')
);

