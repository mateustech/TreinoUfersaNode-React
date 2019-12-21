import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './style.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="logo"><FaRocket /><p>TCE</p></Link>
        <Link className="active" to="/">INÍCIO</Link>
        <Link to="/noticias">CADASTRAR</Link>
        <div className="header-right">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    )
  }
}
