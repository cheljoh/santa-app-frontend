'use client'
import { useState } from 'react'

export default function Home() {
  //write a cypress test
//make a secret santa exchange
//make your own list
  const [formData, setFormData] = useState
    <
      {
        name: string;
      }
    >(
      {
        name: "",
      }
  )

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event: any) {
    event.preventDefault()
  }

  return (
    <>
      <h1>Make A Santa Party Event!</h1>
      <form onSubmit={handleSubmit}>
        <label>Exchange Name</label>
        <input
          type="text"
          placeholder="Exchange Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
   </>
  )
}
