import React, { Component } from 'react';

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event =>{
        event.preventDefault();
        //console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value= '';
        //this.formRef.current.reset();
    };

    render() {


        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef}
                className="add-input" 
                type="text" 
                placeholder="Habit" 
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;