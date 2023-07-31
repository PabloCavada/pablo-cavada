import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import "./Mail.css"


function Mail() {



    const send = ()=>{
        alert("message sended");
    }

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm(
        'service_77tttb8',
        'template_7ka4a99',
        form.current,
        'cajdc4R4fRA3WkKUZ').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
        <div className='form_container' id='contact'>
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="form">
            <label>Name</label>
            <input type="text" name='name' className='Send'/>

            <label>Email</label>
            <input type="email" name="user_email" className='Send' />

            <label>Message</label>
            <textarea name="message" rows="4"/>
            <input type="submit" value="Send" className='btnSend' onClick={send}/>
        </form>
        </div>
  )
}

export default Mail