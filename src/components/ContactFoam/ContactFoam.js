import React, { useState } from 'react'
import styles from './ContactFoam.module.css';
import Button from '../Button/Button';
import { BiMessageDetail } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const ContactFoam = () => {
  let [name,setName]= useState("hania");
  let [email,setEmail]= useState("hania@gmail.com");
  let [text,setText]= useState("Hello from hania.");

  const OnSubmit=(e)=>{
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

  }
  return (
    <section className={styles.container}>
      <div className={styles.foam}>
        <div className={styles.btn}>
          <Button text="VIA SUPPORT CHAT" icon={<BiMessageDetail fontSize="24px" />} />
          <Button text="VIA Call" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button isOutLine={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
      
        <form onSubmit={OnSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'></input>
          </div>
          <div className={styles.form_controller}>
            <label htmlFor='email'>E-Mail</label>
            <input type='email' name='email'></input>
          </div>
          <div className={styles.form_controller}>
            <label htmlFor='textarea'>TEXT</label>
            <textarea  name='textarea' rows='8'></textarea>
          </div>
          <div className={styles.submit_btn}>
            <Button  text="SUBMIT" />
          </div>
        </form>
      
      </div>
      <div className={styles.img}>
        <img height="450px" src='/images/contact.svg' alt='contact image'></img>
      </div>
      <div>
        {
          name + " " +
          email + " " +
          text
        }
      </div>
    </section>
  )
}

export default ContactFoam
