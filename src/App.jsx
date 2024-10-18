import { useState } from 'react'
import './App.css'

import AdminForm from './ADminForm';
import ListItems from './Rendering';

function App() {
  const user = {
    name: 'Hardy',
    imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:'90px'
  }
  // let isLogged = false;
  return (
    <div>
      <h1>{ user.name}</h1>
      <img className='avatar' src={user.imageURL} alt="" style={{ width: user.imageSize }} /> <br />
      <AdminForm></AdminForm>
      <ListItems></ListItems>
    </div>
  )
}

export default App
