import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaAngleDoubleRight } from 'react-icons/fa'

import api from '../../services/api'
import './style.css'
import Header from '../../Components/Header/Header.js'
import Footer from '../../Components/Footer/Footer.js'

export default function Main() {
  const [d, setD] = useState([])

  async function loadDenuncias() {
    const response = await api.get('/noticias')
    setD(response.data)
  }
  useEffect(() => {
    loadDenuncias()
  }, [])
  async function DeleteNoticias(id) {
    alert('Tem Certeza Que Dezeja Deletar?')
    await api.delete(`/noticias/${id}`)
    window.location.reload()
  }

  return (
    <>
      <Header />
      <div className="container-main">
        {d.map(item =>
          <article key={item._id}>
            <label>{item.orgao}</label>
            <strong>{item.title}</strong>
            <div className="row">
              <img src={item.image} />
              <div className="column">
                <div className="text">
                  <p>{item.description}</p>
                </div>
                <div className="row-icons">
                  <Link to={`/noticias/${item._id}`}>< FaAngleDoubleRight /></Link>
                  <Link to='/' onClick={() => DeleteNoticias(item._id)}><FaTrashAlt /></Link>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
      <Footer />
    </>
  )
}
