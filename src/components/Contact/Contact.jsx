import styles from './ContactStyles.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from '../../context/ThemeContext';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { theme } = useTheme();
    const toastTheme = theme === 'light' ? 'light' : 'dark';

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_8zilqp9',
            'template_8jbmh0l',
            form.current,
            {
                publicKey: 'zOGh5XUs11OZtOLjl'
            }
        ).then(
            () => {
                toast.success('Message Sent!');
                form.current.reset();
            },
            (error) => {
                toast.error('Something went wrong. Try again.');
                console.log(error.text);
            },
        )
    }

    return (
        <>
            <section id="contact" className={styles.container}>
                <h1 className='title'>Contact</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="name" hidden>Name</label>
                        <input type="text" name="name" id="name" placeholder='Name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email" hidden>Email Address</label>
                        <input type="text" name="email" id="email" placeholder='Email Address' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message" hidden>Message</label>
                        <textarea name="message" id="message" placeholder='Message' required></textarea>
                    </div>
                    <input type="submit" value="Submit" className='hover btn' />
                </form>
            </section>
            <ToastContainer 
                theme={toastTheme}
                closeOnClick
                pauseOnHover={false}
                autoClose={3000}
            />
        </>
    )
}

export default Contact;
