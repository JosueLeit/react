import './styles.css';
import logo_horizontal from"../../images/logo_horizontal.png";
import { Card } from '../../components/Card';
import React, { useState } from 'react';

export function Home() {

  const [clientName, setClientName] = useState();

  

  return (
  <div className="container">
  <img className="logo" src={logo_horizontal} alt="" />
  <input 
  type="text" 
  placeholder="Digite o seu nome para reservar"
  onChange={ e => setClientName(e.target.value)}
  />
  <button type="button">Adicionar</button>
  
  <Card name={clientName} time="19:29:25"/>
  <Card name="Kradepeido" time="10:19:35"/>
  </div>
)
}

