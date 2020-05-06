import React from 'react';

const Contact = () => {
    return (
        <form name="contact" method="POST" data-netlify="true">
        <label>
          mail
          <input type="email" name="email" />
        </label>
        <label>
          name
          <input type="text" name="name" />
        </label>
        <label>
          nachricht
          <input type="text" name="message" />
        </label>
        <button type="submit">Senden</button>
      </form>
         )
}

export default Contact