import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { Box,Alert } from "@mui/material";
export const Contact = () => {
  const [isOk, setOkAlert] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ie0u1tn",
        "template_856kaub",
        form.current!,
        "_DrY8Yilsnh5fMnf3"
      )
      .then(
        (result) => {
          
          setOkAlert("true");
        },
        (error) => {

          setOkAlert("false");
        }
      );
    form.current?.reset();
  };
  return (
    // <div className="contact-container">
    //   <div className="form-container">
    //     <h1>Contact me</h1>
    //     <form ref={form} onSubmit={sendEmail}>
    //       <div className="form-control">
    //         <label>Name</label>
    //         <input type="text" name="user_name" />
    //       </div>
    //       <div className="form-control">
    //         <label>Email</label>
    //         <input type="email" name="user_email" />
    //       </div>
    //       <div className="form-control">
    //         <label>Subject</label>
    //         <input type="text" name="subject" />
    //       </div>
    //       <div className="form-control">
    //         <label>Message me</label>
    //         <textarea name="message" />
    //       </div>
    //       <div className="form-control">
    //         <button type="submit">Send</button>
    //       </div>
    //       {isOk === "true" ? (
    //         <Alert severity="success">
    //           Your message has been successfully sent!
    //         </Alert>
    //       ) : isOk === "false" ? (
    //         <Alert severity="error">An error occured!</Alert>
    //       ) : (
    //         <div></div>
    //       )}
    //     </form>
    //   </div>
    // </div>
    <Box sx={{width:'100vw'}} display='flex' justifyContent='center' >
<Box className='form-container'>
     <h1 style={{color:'white'}}>Contact me</h1>
         <form ref={form} onSubmit={sendEmail}>
           <div className="form-control">
             <label>Name</label>
             <input type="text" name="user_name" />
           </div>
           <div className="form-control">
             <label>Email</label>
             <input type="email" name="user_email" />
           </div>
           <div className="form-control">
             <label>Subject</label>
             <input type="text" name="subject" />
           </div>
           <div className="form-control">
             <label>Message me</label>
             <textarea name="message" />
           </div>
           <div className="form-control">
             <button type="submit">Send</button>
           </div>
           {isOk === "true" ? (
             <Alert severity="success">
               Your message has been successfully sent!
             </Alert>
           ) : isOk === "false" ? (
             <Alert severity="error">An error occured!</Alert>
           ) : (
             <div></div>
           )}
         </form>
</Box>
    </Box>
  );
};
