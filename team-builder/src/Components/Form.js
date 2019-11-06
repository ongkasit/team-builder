import React, { useState } from 'react';

const Form = props => {
    console.log(props);
    const [members, setMembers] = useState({
        name: '', 
        email: '', 
        role: ''
    })

    const changeHandler = event => {
        event.preventDefault();
        console.log(event.target.value)
        setMembers({...members, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newForm = {
            ...members,
            id: Date.now()
        };
    
    props.addNewForm(newForm);
    console.log(newForm);
    
    setMembers({ name: '', body: ''});

};
    return (
        <div className="App">
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Full Name<input type='text' 
                    name='name' 
                    placeholder='Enter name' 
                    value={members.name} 
                    onChange={changeHandler}/>
            </label>
            <label htmlFor='email'>Email Address<input type='email' 
                    name='email' 
                    placeholder='valid email address' 
                    value={members.email} 
                    onChange={changeHandler}/>
            </label>
            <label htmlFor='role'>Team Role<input type='text' 
                name='role' 
                placeholder='team role' 
                value={members.role} 
                onChange={changeHandler}/>
            </label>
            <button type='submit'>Add team member</button>
        </form>
        </div>
    );
}

export default Form; 