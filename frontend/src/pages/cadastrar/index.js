import React, { setState, useState } from 'react';
import api from '../../services/api'

import Header from '../../Components/Header/Header.js'
import Footer from '../../Components/Footer/Footer.js'
import './style.css'

export default function Cadastrar({ history }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [orgao, setOrgao] = useState('')
  const [image, setImage] = useState('')
  const [namehash, setNamehash] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      title,
      description,
      orgao,
      name_hash: namehash,
      image
    }
    await api.post('/noticias', data);
    history.push('/');
  }
  return (
    <>
      <Header />
      <div className="container-table">
        <h1>Cadastrar Nova Noticia</h1>
        <form className="table-main" onSubmit={handleSubmit}>
          <input
            id="title"
            placeholder="Título da Notícia"
            value={title}
            onChange={event => setTitle(event.target.value)} />

          <input
            id="orgao"
            placeholder="Orgão Denunciado"
            value={orgao}
            onChange={event => setOrgao(event.target.value)} />

          <input
            id="namehash"
            placeholder="Nome Anonimo"
            value={namehash}
            onChange={event => setNamehash(event.target.value)} />

          <input
            id="image"
            placeholder="URL da imagem"
            value={image}
            onChange={event => setImage(event.target.value)} />

          <input
            id="description"
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)} />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
//     <textarea placeholder="Descrição" rows="10" cols="70"></textarea>