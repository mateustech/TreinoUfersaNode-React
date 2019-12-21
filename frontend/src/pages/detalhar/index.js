import React, { useState, useEffect, } from 'react';
import Header from '../../Components/Header/Header.js'
import Footer from '../../Components/Footer/Footer.js'
import api from '../../services/api'
import './styles.css'
export default function Detalhar(props) {
  const [denuncia, setDenuncia] = useState('')

  async function loaddenuncia() {
    const id = props.match.params.id
    const response = await api.get(`/noticias/${id}`)
    setDenuncia(response.data)
  }
  useEffect(() => {
    loaddenuncia()
  }, [])

  return (
    <>
      <Header />
      <div className="container-detalhe">
        <label>{denuncia.orgao}</label>
        <h1>{denuncia.title}</h1>
        <img src={denuncia.image}></img>
        <div className="text">
          <p>{denuncia.description}</p>
        </div>
      </div>
      <Footer />

    </>
  )
}
