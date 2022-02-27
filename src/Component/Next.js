import React, { Component } from "react";




export class Next extends Component {
    render() {
        let names = this.props.candiate;
        return (
            <>
                <div className="head">
                    <h1>Employee Feedback Data</h1>
                    <div className="box">
                        {names.length > 0 && 
                        names.map((cand) => {
                            return (
                                <h3> Name:{cand.name}|| Department:{cand.dept}|| Rating:{cand.rating}</h3>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <button onClick={this.props.back} className="back">Go Back</button>
                </div>
            </>
        );
    }
}

export default Next;