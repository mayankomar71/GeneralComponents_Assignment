import React from 'react';
import Input from './inputcomponent'
import Button from './buttoncomponent'
import {FormErrors} from './formerrors'

class signuplogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            SignIn: true,
            SignUp: false,
            email: '',
            password: '',
            name: '',
            mobile: '',
            formErrors: { name: '', email: '', password: '', phone: '' },
            nameValid: false,
            emailValid: false,
            passwordValid: false,
            phoneValid: false,
            formValid: false  
        }
    }
  

    handleInput=(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value },
          () => { this.validateField(name, value) });
      }



    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let nameValid = this.state.passwordValid;
        let phoneValid = this.state.phoneValid
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length === 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);

                fieldValidationErrors.password = passwordValid ? '' : 'is Weak';
                break;
            case 'name':
                nameValid = value.match(/^[a-zA-Z]+$/);;
                fieldValidationErrors.name = nameValid ? '' : ' is not Valid';
                break;
            case 'mobile':
                phoneValid = value.length === 10 && value.match(/^[0-9]+$/);;
                fieldValidationErrors.mobile1 = phoneValid ? '' : ' Enter a Valid Phone no.';
                break;
            default:
                break;
        }


        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            nameValid: nameValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.nameValid && this.state.phoneValid });

    }

    signIn = (event) => {
        this.setState({
            SignUp: false,
            SignIn: true,
            email: '',
            password: '',
            name: '',
            mobile: '',
            formErrors:{ name: '', email: '', password: '', phone: '' }
          
        })
       
    }
    signUp = () => {
        this.setState({
            SignUp: true,
            SignIn: false,
            email: '',
            password: '',
            name: '',
            mobile: '',
            formErrors:{ name: '', email: '', password: '', phone: '' }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.signIn}>SignIn</button>
                <button onClick={this.signUp}>signup</button>
                {
                    this.state.SignIn && <form className="form-group" onSubmit={this.handleFormSubmit}>
                        <div className="default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <Input input_type={'text'}
                            title={' email'}
                            name={'email'}
                            value={this.state.email}
                            placeholder={'Enter your email'}
                            handleChange={this.handleInput}
                        />
                        <Input input_type={'password'}
                            title={' password'}
                            name={'password'}
                            value={this.state.password}
                            placeholder={'Enter your password'}
                            handleChange={this.handleInput}
                        />
                        <Button
                            action={this.handleFormSubmit}
                            type={'primary'}
                            title={'Submit'}
                        />

                    </form>

                }
                {
                    this.state.SignUp && <form className="form-group" onSubmit={this.handleFormSubmit}>
                        <div className="default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <Input input_type={'text'}
                            title={'Name'}
                            name={'name'}
                            value={this.state.name}
                            placeholder={'Enter your Name'}
                            handleChange={this.handleInput}
                        />
                        <Input input_type={'text'}
                            title={' email'}
                            name={'email'}
                            value={this.state.email}
                            placeholder={'Enter your email'}
                            handleChange={this.handleInput}
                        />
                        <Input input_type={'password'}
                            title={' password'}
                            name={'password'}
                            value={this.state.password}
                            placeholder={'Enter your password'}
                            handleChange={this.handleInput}
                        />
                        <Input input_type={'text'}
                            title={'mobile'}
                            name={'mobile'}
                            value={this.state.mobile}
                            placeholder={'Enter your phone Number'}
                            handleChange={this.handleInput}
                        />
                        <Button
                            action={this.handleFormSubmit}
                            type={'primary'}
                            title={'Submit'}
                        />


                    </form>

                }

            </div>

        )
    }

}
export default signuplogin