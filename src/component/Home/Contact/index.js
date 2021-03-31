import React from 'react';

const Contact = () => {
    const [data, setData] = React.useState({
        email: "",
        subject: "",
        message: ""
    });

    const onChangeHandle = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    var validEmail = data.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? 'is-valid': '';
    var validSubject = data.subject.length ? 'is-valid': '';
    var validMessage = data.message.length ? 'is-valid': '';

    return(
        <form 
            method='POST' 
            id='contact-form'
        >
            <input 
                type='email' 
                name='email' 
                className={`form-control ${validEmail}`} 
                placeholder='Email' 
                onChange={onChangeHandle}
            />
            <input 
                type='text' 
                name='subject' 
                className={`form-control ${validSubject}`} 
                placeholder='Temat' 
                onChange={onChangeHandle}
            />
            <textarea 
                name='message' 
                className={`form-control ${validMessage}`} 
                placeholder='Wiadomość'
                onChange={onChangeHandle}
            ></textarea>
            <button
                type='submit'
                className='btn btn-primary'
            >Wyślij</button>
        </form>
    )
}


export default Contact;