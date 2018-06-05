import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import SimpleForm from './layout';
import styles from './styles.scss';

import TextInput from './textInput';
import PasswordInput from './passwordInput';

class Login extends Component {

    handleSubmit = (values) => (
        console.log(values)
    )

    handleChange(event) {
       console.log(event.target.value);
    }



    render() {
        return (
            <SimpleForm onSubmit={this.handleSubmit()} onChange={this.handleChange}/>
        );
    }

}

//export default reduxForm({ form: 'signIn' })(Login);
export default Login;


//<Component handleSubmit={this.handleSubmit} />

//desde el index mando esto al layout.

/*<Fragment>
      <label className={styles.login}>Email</label>
      <Field name='email' component={TextInput}/>
      <label className={styles.login}>Password</label>
      <Field name='password' component={PasswordInput}/>
      <Field name='submit' component={}/>
    </Fragment>
    */