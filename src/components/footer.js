import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Resume from '../assets/files/resume.pdf'

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "80px",
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
                    <a href='https://www.linkedin.com/in/alonzo-roman-4a5325138/'><FaLinkedin size={40}/></a>
                    <a href={Resume} download><FaFilePdf size={40}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer