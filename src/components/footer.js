import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <div className='footLinks'>
                    <a href='https://github.com/alonzofroman'><FaGithub size={40}/></a>
                    <a href='https://linkedin.com/alonzo-roman'><FaLinkedin size={40}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer