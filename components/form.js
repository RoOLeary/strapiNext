import { useState } from 'react';

export default function Form() {
    const [user, setUser] = useState(); 
    const registerUser = async event => {
    event.preventDefault()
    setUser(event.target.name.value);
    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    
    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
      <>
      <div>{user ? user :  ''}</div>
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
    </>
    )
}