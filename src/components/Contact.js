import React from 'react';

const Contact = () => {
    return (
        <div className="formwrap">
        <form name="contact" method="POST" data-netlify="true">
        <label>
          mail<br/>
          <input type="email" name="email"  className="inputx"/>
        </label>
        <label>
          name<br/>
          <input type="text" name="name"  className="inputx"/>
        </label>
        <label>
          nachricht<br/>
          <textarea name="message"  className="inputx" />
        </label>
        <button type="submit">Senden</button>
      </form>
      </div>
         )
}

export default Contact