import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'empty'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert(`Hello ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input
                    type={'text'}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                />
                <input type={'submit'} value={'Submit Form'}/>
            </form>
        )
    }
}
export default MyForm;
