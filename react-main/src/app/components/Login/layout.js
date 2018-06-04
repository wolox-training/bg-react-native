import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
//import styles from './styles.scss';

//import TextInput from './textInput';
//import PasswordInput from './passwordInput';

export default SimpleForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
        </form>
    );

}
//export default reduxForm({ form: 'signIn' })(SimpleForm);

/*<label className={styles.login}>Email</label>
<Field name='email' component={TextInput}/>
<label className={styles.login}>Password</label>
<Field name='password' component={PasswordInput}/>
<Field name='submit' component={}/>*/