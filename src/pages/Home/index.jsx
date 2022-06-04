import './styles.css';
import logo_horizontal from"../../images/logo_horizontal.png";
import { Card } from '../../components/Card';
import React, { useEffect, useState } from 'react';

export function Home() {

  const [clientName, setClientName] = useState('');
  const [bookings, setBookings ] = useState([]);
  const [user, setUser] = useState({name: '', avatar:''});
  
  function handleAddBooking() {
    const newBooking = {
      name: clientName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setBookings(prevState => [...prevState, newBooking]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/josueleit')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  })
      


  return (
  <div className="container">
  <header>
    <h1>Reserva para o evento X</h1>
    {/* <img className="logo" src={logo_horizontal} alt="" />   */}
    <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt="Foto de Perfil" />
    </div>
  </header>  
  
  <input 
  type="text" 
  placeholder="Digite o seu nome para reservar"
  onChange={ e => setClientName(e.target.value)}
  />
  <button type="button" onClick={handleAddBooking}>
    Reservar
  </button>
  
  {
    bookings.map(booking => 
    <Card
    key={booking.time}
    name={booking.name}
    time={booking.time}/>)
  }
  </div>
)
}
