import React from 'react'

import ContactStyles from './Contact.module.css'

const contact = () => {
    return (
        <div id={ContactStyles.contact}>
          <form action="php/contact-form.php" method="post">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" required></textarea>
            <center><button type="submit" name="submit">Submit</button></center>
          </form>
        </div>
    )
}

export default contact;





