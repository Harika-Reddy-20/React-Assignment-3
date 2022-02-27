import React, { Component } from "react";
import Next from "./Next";
import "./Form.css";


export class Form extends Component {
    state = {
        name: "",
        dept: "",
        rating: "",
        user: [],
        showForm: true,
    };

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onsubmit = (event) => {
        event.preventDefault();
        this.setState({
            user: [...this.state.user, {
                name: this.state.name,
                dept: this.state.dept,
                rating: this.state.rating,
            },
            ],
            name: "",
            dept: "",
            rating: "",
            showForm: !this.state.showForm,
        });
    };
    goBack = () => {
        this.setState({
            showForm: !this.state.showForm,
        });
    };
    render() {
        return (
            <>
                <div className='container'>
                    {this.state.showForm && (
                        <>
                         <h1 className='head'>Employee Feedback Form</h1>

                         <form onSubmit={this.onsubmit} className='form'>
                             <label htmlFor="name">Name:</label>
                             <input type="text" id="name" name="name" value={this.state.name} onChange={this.onchange} /><br />
                             <label htmlFor="name">Department:</label>
                             <input type="text" id="dept" name="dept" value={this.state.dept} onChange={this.onchange} /> <br />
                             <label htmlFor="name">Rating:</label>
                             <input type="text" id="rating" name="rating" value={this.state.rating} onChange={this.onchange} /><br />
                             <button type="submit">Submit</button>
     
                         </form>
                        </>

                    )}
                   

                    )
                    {!this.state.showForm && ( <Next candiate={this.state.user} back={this.goBack} />)}
                </div>
            </>
        );
    }

}

export default Form