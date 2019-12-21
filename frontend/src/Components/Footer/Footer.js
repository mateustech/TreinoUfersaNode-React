import React, { Component } from 'react';
import { FaLinkedin, FaStackOverflow, FaBootstrap, FaRocket, FaFacebook, FaPhp, FaJs, FaInstagram, FaPython, FaAngular, FaDocker, FaGithubAlt, FaLinux, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import './style.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p><FaLinkedin /></p>
        <p><FaFacebook /></p>
        <p><FaInstagram /></p>
        <p><FaPython /></p>
        <p><FaAngular /></p>
        <p><FaDocker /></p>
        <p><FaGithubAlt /></p>
        <p><FaJs /></p>
        <p><FaPhp /></p>
        <p><FaStackOverflow /></p>
        <p><FaRocket /></p>
        <p><FaLinux /></p>
        <p><FaHtml5 /></p>
        <p><FaCss3Alt /></p>
        <p><FaBootstrap /></p>
      </div>
    );
  }
}

