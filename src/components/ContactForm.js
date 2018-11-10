import React from 'react'
import styled from 'styled-components'



const ContactForm = () => {
    return (
        <div>
            <span>Contact me today to see how I can help.</span>
            <form name="contact" method="POST" netlify>
                <input type="email" name="email"></input>
            </form>
        </div>
    );
};

export default ContactForm;