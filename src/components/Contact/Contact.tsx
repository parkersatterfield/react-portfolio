import './Contact.css'
import logo from '../Nav/logo.svg'
import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import Footer from '../Footer/Footer'

function Contact() {
    const formId = '9oEYMWJB';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const submitForm = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        setMessage({ text: '', color: '' });

        try {
            const response = await fetch(formSparkUrl, {
                method: 'POST',
                body: JSON.stringify(formState),
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            setMessage({ text: 'Thanks for the message!', color: 'red' });
            setFormState({ name: '', email: '', message: '' });
        } catch {
            setMessage({ text: 'Something went wrong. Please try again.', color: 'green' });
        } finally {
            setSubmitting(false);
        }
    }

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState(previous => ({ ...previous, [name]: value }));
    }

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState({
        text: '',
        color: ''
    });

    return (
        <div className='contact'>
            <form className="formContainer" onSubmit={submitForm}>
                <div className="form">
                    <div className="formSidebar">
                        <div className="linkContainer">
                            <div className='links'>
                                <div className="linksList">
                                    <div>
                                        <a aria-label="GitHub" className="fa fa-github" href="https://github.com/parkersatterfield" target="_blank" rel="noreferrer"> </a>
                                        <p>GitHub</p>
                                    </div>
                                    <div>
                                        <a aria-label="LinkedIn" className="fa fa-linkedin" href="https://www.linkedin.com/in/parker-satterfield-22313b160/" target="_blank" rel="noreferrer"> </a>
                                        <p>LinkedIn</p>
                                    </div>
                                    <div>
                                        <a aria-label="Instagram" className="fa fa-instagram" href="https://www.instagram.com/parker_satterfield/" target="_blank" rel="noreferrer"> </a>
                                        <p>Instagram</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formMain'>
                        <div className='formHead'>
                            <h1>Hit me up 📨</h1>
                            <img src={logo} alt="" />
                        </div>
                        {message.text &&
                            <div role="status" className={`message ${message.color}`}>
                                {message.text}
                            </div>}
                        <div className="singles">
                            <div className="singleInput">
                                <label htmlFor="email">Email</label>
                                <input id='email' name='email' required type="email" value={formState.email} onChange={updateFormControl} />
                            </div>
                            <div className="singleInput">
                                <label htmlFor="name">Name</label>
                                <input id='name' name='name' required type="text" value={formState.name} onChange={updateFormControl} />
                            </div>
                        </div>
                        <div className="multi">
                            <label htmlFor="message">Message</label>
                            <textarea id='message' name='message' required value={formState.message} onChange={updateFormControl} />
                        </div>
                        <button type="submit" className='submitButton' disabled={submitting || formState.message === '' || formState.name === '' || formState.email === ''}>
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Contact;
