import React from "react";

const Contact = () => {
    return (
        <>
            <h1>Contact Us</h1>
            <p>I am dedicated to continuous improvement and innovation, always seeking new ways to solve problems and enhance efficiency. My work on [specific project or innovation] demonstrates my ability to think creatively and implement effective solutions." </p>
            {/* <hr/> */}
           <form action="#">
            <input type="text" placeholder="Enter your number"/>
            <br/>
            <br/>
            <button style={{ background: '#000', color: '#fff', border: 'none', padding: '8px 16px' }}>Submit Me!</button>

           </form>
        </>
    )
}

export default Contact;