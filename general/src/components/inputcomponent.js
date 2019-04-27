import React from 'react';
import './formstyle.css'

class Input extends React.Component {
    render() {
        return (
            <div >

           
                <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
                <input
                    className="form-control"
                    id={this.props.name}
                    name={this.props.name}
                    type={this.props.input_type}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeholder}
                />
              
            </div>
        )
    }
}

export default Input;